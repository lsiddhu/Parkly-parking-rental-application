
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ParkingMap from "../components/ParkingMap";
import "../App.css";
import "./Auth.css";

const API_URL =  `${import.meta.env.VITE_API_URL}/api/parking-spaces`;;
const BOOKING_API = `${import.meta.env.VITE_API_URL}/api/bookings`;

function DriverPage() {
  const [spaces, setSpaces] = useState([]);
  const [search, setSearch] = useState("");
  const [covered, setCovered] = useState(false);
  const [evCharging, setEvCharging] = useState(false);
  const [access24x7, setAccess24x7] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedSpace, setSelectedSpace] = useState(null);

  const [startAt, setStartAt] = useState("");
  const [durationHours, setDurationHours] = useState(1);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingMessage, setBookingMessage] = useState("");
  const [bookingError, setBookingError] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const fetchSpaces = async () => {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.message || "Unable to load parking spaces");
        }

        setSpaces(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSpaces();
  }, []);

  const filteredSpaces = spaces.filter((space) => {
    const searchText = search.trim().toLowerCase();

    const matchesArea =
      (space.area || "").toLowerCase().includes(searchText) ||
      (space.address || "").toLowerCase().includes(searchText);

    return (
      matchesArea &&
      (!covered || space.covered) &&
      (!evCharging || space.evCharging) &&
      (!access24x7 || space.access24x7)
    );
  });

  // Load Razorpay Checkout
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  };

  // Create booking and start payment
  const handleBooking = async (event) => {
    event.preventDefault();

    setBookingError("");
    setBookingMessage("");

    if (!selectedSpace || !startAt) {
      setBookingError("Please select your booking date and time.");
      return;
    }

    const bookingStart = new Date(startAt);

    if (Number.isNaN(bookingStart.getTime()) || bookingStart <= new Date()) {
      setBookingError("Please select a future booking time.");
      return;
    }

    try {
      setBookingLoading(true);

      // 1. Create booking
      const bookingResponse = await fetch(BOOKING_API, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          parkingSpaceId: selectedSpace.id,
          startAt: bookingStart.toISOString(),
          durationHours: Number(durationHours),
        }),
      });

      const bookingResult = await bookingResponse.json();

      if (!bookingResponse.ok || !bookingResult.success) {
        throw new Error(
          bookingResult.message || "Unable to create booking."
        );
      }

      const bookingId = bookingResult.booking.id;

      // 2. Create Razorpay order
      const orderResponse = await fetch(
        `${BOOKING_API}/${bookingId}/payment/order`,
        {
          method: "POST",
          credentials: "include",
        }
      );

      const orderResult = await orderResponse.json();

      if (!orderResponse.ok || !orderResult.success) {
        throw new Error(
          orderResult.message || "Unable to create payment order."
        );
      }

      // 3. Load Razorpay Checkout
      const loaded = await loadRazorpay();

      if (!loaded) {
        throw new Error("Unable to load Razorpay Checkout.");
      }

      const options = {
        key: orderResult.keyId,
        amount: orderResult.amount,
        currency: orderResult.currency,
        name: "Parkly",
        description: `Parking booking #${bookingId}`,
        order_id: orderResult.orderId,

        handler: async function (paymentResponse) {
          try {
            // 4. Verify payment on backend
            const verifyResponse = await fetch(
              `${BOOKING_API}/${bookingId}/payment/verify`,
              {
                method: "POST",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(paymentResponse),
              }
            );

            const verifyResult = await verifyResponse.json();

            if (!verifyResponse.ok || !verifyResult.success) {
              throw new Error(
                verifyResult.message || "Payment verification failed."
              );
            }

            setBookingMessage(
              `Payment successful! Your booking #${bookingId} is confirmed.`
            );

            setBookingError("");
            navigate("/booking-success", {
              replace: true,
              state: {
                booking: {
                  id: bookingId,
                  parkingSpace: selectedSpace,
                  startAt: bookingStart.toISOString(),
                  durationHours: Number(durationHours),
                  totalAmount:
                    Number(selectedSpace.pricePerHour) *
                    Number(durationHours),
                },
              },
            });
          } catch (err) {
            setBookingError(err.message);
          } finally {
            setBookingLoading(false);
          }
        },

        modal: {
          ondismiss: () => {
            setBookingLoading(false);
            setBookingMessage(
              "Payment window closed. Your booking is still pending until it expires."
            );
          },
        },

        theme: {
          color: "#263746",
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.on("payment.failed", function (response) {
        setBookingError(
          response.error.description || "Payment failed. Please try again."
        );
        setBookingLoading(false);
      });

      razorpay.open();
    } catch (err) {
      setBookingError(err.message);
      setBookingLoading(false);
    }
  };

  return (
    <main className="page driver-page">
      <section className="driver-header">
        <p className="eyebrow">PARKING MADE SIMPLE</p>
        <h1>Find your parking space.</h1>
        <p className="page-sub">
          Explore available parking spaces across Mumbai.
          Search by location and find a spot that suits you.
        </p>
      </section>

      <section className="driver-controls">
        <div className="driver-search">
          <label htmlFor="areaSearch">Where do you need parking?</label>
          <input
            id="areaSearch"
            type="text"
            placeholder="Search area or address..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <div className="driver-filters">
          <span className="group-label">Preferences</span>

          <div className="checks">
            <label className="check">
              <input
                type="checkbox"
                checked={covered}
                onChange={(event) => setCovered(event.target.checked)}
              />
              Covered parking
            </label>

            <label className="check">
              <input
                type="checkbox"
                checked={evCharging}
                onChange={(event) => setEvCharging(event.target.checked)}
              />
              EV charging
            </label>

            <label className="check">
              <input
                type="checkbox"
                checked={access24x7}
                onChange={(event) => setAccess24x7(event.target.checked)}
              />
              24/7 access
            </label>
          </div>
        </div>
      </section>

      {bookingMessage && (
        <p className="driver-status">{bookingMessage}</p>
      )}

      {bookingError && (
        <p className="driver-error">{bookingError}</p>
      )}

      {loading ? (
        <p className="driver-status">Loading parking spaces...</p>
      ) : error ? (
        <p className="driver-error">{error}</p>
      ) : (
        <>
          <section className="driver-map-section">
            <div className="driver-section-heading">
              <div>
                <h2>Explore the map</h2>
                <p>View available parking locations around Mumbai.</p>
              </div>

              <span className="result-count">
                {filteredSpaces.length} spaces found
              </span>
            </div>

            <div className="driver-map">
              <ParkingMap spaces={filteredSpaces} />
            </div>
          </section>

          <section className="driver-results">
            <div className="driver-section-heading">
              <div>
                <h2>Available parking spaces</h2>
                <p>Compare locations, prices and facilities.</p>
              </div>
            </div>

            {filteredSpaces.length === 0 ? (
              <div className="driver-empty">
                <h3>No parking spaces found</h3>
                <p>
                  Try another area or change your selected preferences.
                </p>
              </div>
            ) : (
              <div className="parking-card-grid">
                {filteredSpaces.map((space) => (
                  <article
                    className="parking-card"
                    key={space.id}
                    onClick={() => {
                      setSelectedSpace(space);
                      setBookingError("");
                      setBookingMessage("");
                    }}
                  >
                    <div className="parking-card-top">
                      <div>
                        <h3>{space.name}</h3>
                        <p className="parking-area">{space.area}</p>
                      </div>

                      <div className="parking-price">
                        ₹{space.pricePerHour}
                        <span>/ hour</span>
                      </div>
                    </div>

                    <p className="parking-address">{space.address}</p>
                    {space.latitude !== null &&
                      space.latitude !== undefined &&
                      space.longitude !== null &&
                      space.longitude !== undefined &&
                      Number.isFinite(Number(space.latitude)) &&
                      Number.isFinite(Number(space.longitude)) && (
                        <a
                          className="parking-card-directions"
                          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                            `${space.latitude},${space.longitude}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                        >
                          <span>Get Directions →</span>
                        </a>
                      )}
                    <div className="parking-features">
                      <span>{space.covered ? "Covered" : "Open"}</span>
                      <span>
                        {space.evCharging
                          ? "EV charging"
                          : "No EV charging"}
                      </span>
                      <span>
                        {space.access24x7
                          ? "24/7 access"
                          : "Limited access"}
                      </span>
                    </div>

                    {space.contactPhone && (
                      <div className="parking-contact">
                        <span>Provider contact</span>
                        <a
                          href={`tel:${space.contactPhone}`}
                          onClick={(event) => event.stopPropagation()}
                        >
                          {space.contactPhone}
                        </a>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            )}
          </section>

          {selectedSpace && (
            <div
              className="parking-modal-overlay"
              onClick={() => {
                if (!bookingLoading) setSelectedSpace(null);
              }}
            >
              <div
                className="parking-modal"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  className="modal-close"
                  onClick={() => setSelectedSpace(null)}
                  aria-label="Close details"
                  disabled={bookingLoading}
                >
                  ×
                </button>

                <p className="eyebrow">PARKING DETAILS</p>

                <h2>{selectedSpace.name}</h2>

                <p className="modal-address">
                  {selectedSpace.address}, {selectedSpace.area}, Mumbai
                </p>

                <div className="modal-price">
                  ₹{selectedSpace.pricePerHour}
                  <span> / hour</span>
                </div>

                <div className="modal-divider" />

                <h3>Parking facilities</h3>

                <div className="modal-features">
                  {selectedSpace.covered && <span>Covered parking</span>}
                  {selectedSpace.evCharging && <span>EV charging</span>}
                  {selectedSpace.access24x7 && <span>24/7 access</span>}

                  {!selectedSpace.covered &&
                    !selectedSpace.evCharging &&
                    !selectedSpace.access24x7 && (
                      <span>Open parking</span>
                    )}
                </div>

                {selectedSpace.contactPhone && (
                  <div className="modal-contact">
                    <h3>Provider contact</h3>
                    <a href={`tel:${selectedSpace.contactPhone}`}>
                      {selectedSpace.contactPhone}
                    </a>
                  </div>
                )}

                <div className="modal-divider" />

                <h3 className="modal-heading">Book this parking space</h3>

                <form onSubmit={handleBooking}>
                  <div className="driver-search">
                    <label htmlFor="bookingDate">
                      Booking date and time
                    </label>
                    <input
                      id="bookingDate"
                      type="datetime-local"
                      value={startAt}
                      min={new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                        .toISOString()
                        .slice(0, 16)}
                      onChange={(event) => setStartAt(event.target.value)}
                      required
                    />
                  </div>

                  <div className="driver-search">
                    <label htmlFor="duration">
                      Parking duration
                    </label>
                    <select
                      id="duration"
                      value={durationHours}
                      onChange={(event) =>
                        setDurationHours(Number(event.target.value))
                      }
                    >
                      {Array.from({ length: 24 }, (_, index) => index + 1).map(
                        (hour) => (
                          <option key={hour} value={hour}>
                            {hour} {hour === 1 ? "hour" : "hours"}
                          </option>
                        )
                      )}
                    </select>
                  </div>

                  <div className="modal-price">
                    ₹{selectedSpace.pricePerHour * durationHours}
                    <span> total amount</span>
                  </div>

                  {bookingError && (
                    <p className="driver-error">{bookingError}</p>
                  )}

                  <button
                    type="submit"
                    className="directions-button"
                    disabled={bookingLoading}
                  >
                    {bookingLoading ? "Processing..." : "Book Now & Pay"}
                  </button>
                </form>
              </div>
            </div>
          )}
        </>
      )}
    </main>
  );
}

export default DriverPage;
