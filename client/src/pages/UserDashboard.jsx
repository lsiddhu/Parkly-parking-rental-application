
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./UserDashboard.css";

const BOOKING_API = "http://localhost:5000/api/bookings";
const PARKING_API = "http://localhost:5000/api/parking-spaces";

function UserDashboard({ user }) {
  const [bookings, setBookings] = useState([]);
  const [spaces, setSpaces] = useState([]);
  const [providerBookings, setProviderBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cancellingId, setCancellingId]=useState(null);
  const [dashboardNotice, setDashboardNotice] = useState("");

  const role = user?.role?.toUpperCase();
  const isDriver = role === "DRIVER" || role === "BOTH";
  const isProvider = role === "PROVIDER" || role === "BOTH";

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        setError("");

        const requests = [];

        if (isDriver) {
          requests.push(
            fetch(`${BOOKING_API}/mine`, {
              credentials: "include",
            }).then(async (response) => {
              const result = await response.json();

              if (!response.ok || !result.success) {
                throw new Error(result.message || "Unable to load bookings.");
              }

              return { type: "bookings", data: result.bookings || [] };
            })
          );
        }

        if (isProvider) {
          requests.push(
            fetch(`${PARKING_API}/mine`, {
              credentials: "include",
            }).then(async (response) => {
              const result = await response.json();

              if (!response.ok || !result.success) {
                throw new Error(
                  result.message || "Unable to load parking spaces."
                );
              }

              return { type: "spaces", data: result.data || [] };
            })
          );

          requests.push(
            fetch(`${BOOKING_API}/provider`, {
              credentials: "include",
            }).then(async (response) => {
              const result = await response.json();

              if (!response.ok || !result.success) {
                throw new Error(
                  result.message || "Unable to load received bookings."
                );
              }

              return {
                type: "providerBookings",
                data: result.bookings || [],
              };
            })
          );
        }

        const results = await Promise.all(requests);

        results.forEach((result) => {
          if (result.type === "bookings") setBookings(result.data);
          if (result.type === "spaces") setSpaces(result.data);
          if (result.type === "providerBookings") {
            setProviderBookings(result.data);
          }
        });
      } catch (err) {
        console.error("Dashboard error:", err);
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [role]);

  const paidBookings = useMemo(
    () => bookings.filter((booking) => booking.paymentStatus === "PAID"),
    [bookings]
  );

  const paidProviderBookings = useMemo(
    () =>
      providerBookings.filter(
        (booking) => booking.paymentStatus === "PAID"
      ),
    [providerBookings]
  );

  const totalSpent = paidBookings.reduce(
    (total, booking) => total + Number(booking.totalPrice || 0),
    0
  );

  const totalEarnings = paidProviderBookings.reduce(
    (total, booking) => total + Number(booking.totalPrice || 0),
    0
  );

  const activeSpaces = spaces.filter((space) => space.available);
  const inactiveSpaces = spaces.filter((space) => !space.available);

  const upcomingBookings = useMemo(() => {
    const now = new Date();

    return bookings
      .filter((booking) => {
        const start = booking.startAt
          ? new Date(booking.startAt)
          : new Date(booking.bookingDate);

        return (
          start >= now &&
          ["CONFIRMED", "PENDING"].includes(booking.status)
        );
      })
      .sort(
        (a, b) =>
          new Date(a.startAt || a.bookingDate) -
          new Date(b.startAt || b.bookingDate)
      );
  }, [bookings]);

  const currentMonthSpent = useMemo(() => {
    const now = new Date();

    return paidBookings
      .filter((booking) => {
        const date = new Date(booking.startAt || booking.bookingDate);

        return (
          date.getMonth() === now.getMonth() &&
          date.getFullYear() === now.getFullYear()
        );
      })
      .reduce(
        (total, booking) => total + Number(booking.totalPrice || 0),
        0
      );
  }, [paidBookings]);

  const earningsChart = useMemo(() => {
    const now = new Date();

    return Array.from({ length: 6 }, (_, index) => {
      const date = new Date(
        now.getFullYear(),
        now.getMonth() - 5 + index,
        1
      );

      const amount = paidProviderBookings
        .filter((booking) => {
          const bookingDate = new Date(
            booking.startAt || booking.bookingDate
          );

          return (
            bookingDate.getMonth() === date.getMonth() &&
            bookingDate.getFullYear() === date.getFullYear()
          );
        })
        .reduce(
          (total, booking) => total + Number(booking.totalPrice || 0),
          0
        );

      return {
        label: date.toLocaleDateString("en-IN", { month: "short" }),
        amount,
      };
    });
  }, [paidProviderBookings]);

  const maxEarnings = Math.max(
    ...earningsChart.map((item) => item.amount),
    1
  );

  const getBookingDate = (booking) => {
    const date = booking.startAt || booking.bookingDate;

    if (!date) return "Date unavailable";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const getBookingTime = (booking) => {
    if (booking.startAt) {
      return new Date(booking.startAt).toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      });
    }

    return booking.startTime || "Time unavailable";
  };

  const getBookingEndTime = (booking) => {
    if (booking.endAt) {
      return new Date(booking.endAt).toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      });
    }

    if (booking.startAt && booking.durationHours) {
      const endDate = new Date(booking.startAt);

      endDate.setTime(
        endDate.getTime() +
          Number(booking.durationHours) * 60 * 60 * 1000
      );

      return endDate.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      });
    }

    return "Time unavailable";
  };

  const getDirectionsUrl = (space) => {
    if (
      space?.latitude == null ||
      space?.longitude == null
    ) {
      return null;
    }

    const latitude = Number(space.latitude);
    const longitude = Number(space.longitude);

    if (
      !Number.isFinite(latitude) ||
      !Number.isFinite(longitude) ||
      latitude < -90 ||
      latitude > 90 ||
      longitude < -180 ||
      longitude > 180
    ) {
      return null;
    }

    return `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
  };
  const handleCancelBooking = async (booking) => {
    const confirmed = window.confirm(
      `Are you sure you want to cancel booking #${booking.id}?`
    );

    if (!confirmed) return;

    try {
      setCancellingId(booking.id);
      setError("");
      setDashboardNotice("");

      const response = await fetch(
        `${BOOKING_API}/${booking.id}/cancel`,
        {
          method: "PATCH",
          credentials: "include",
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to cancel booking.");
      }

      // Update booking status immediately
      setBookings((previousBookings) =>
        previousBookings.map((item) =>
          item.id === booking.id
            ? { ...item, status: "CANCELLED" }
            : item
        )
      );

      setDashboardNotice("Your booking has been cancelled successfully.");
    } catch (err) {
      console.error("Cancel booking error:", err);
      setError(err.message || "Unable to cancel booking.");
    } finally {
      setCancellingId(null);
    }
};

  const getStatusClass = (status) => {
    switch (status) {
      case "CONFIRMED":
        return "confirmed";
      case "COMPLETED":
        return "completed";
      case "CANCELLED":
        return "cancelled";
      case "PENDING":
        return "pending";
      default:
        return "";
    }
  };

  const formatCurrency = (amount) =>
    `₹${Number(amount || 0).toLocaleString("en-IN")}`;

  if (loading) {
    return (
      <main className="dashboard-page">
        <div className="dashboard-message">
          Loading your dashboard...
        </div>
      </main>
    );
  }

  return (
    <main className="dashboard-page">
      <div className="dashboard-layout">

        {/* Sidebar */}
        <aside className="dashboard-sidebar">

          <p className="sidebar-label">YOUR WORKSPACE</p>

          <div className="sidebar-role">
            {role === "BOTH" ? "Driver & Provider" : role}
          </div>

          <nav className="sidebar-navigation">
            <a href="#overview" className="sidebar-link active">
              <span>▦</span> Overview
            </a>

            {isDriver && (
              <>
                <a href="#bookings" className="sidebar-link">
                  <span>▣</span> My Bookings
                </a>
                <a href="#payments" className="sidebar-link">
                  <span>₹</span> Payments
                </a>
              </>
            )}

            {isProvider && (
              <>
                <a href="#spaces" className="sidebar-link">
                  <span>⌂</span> My Spaces
                </a>
                <a href="#earnings" className="sidebar-link">
                  <span>↗</span> Earnings
                </a>
              </>
            )}

            <a href="#profile" className="sidebar-link">
              <span>⚙</span> Settings
            </a>
          </nav>

          <div className="sidebar-bottom">
            <div className="sidebar-promo">
              <strong>
                {isDriver ? "Need a parking spot?" : "Have a spare space?"}
              </strong>
              <p>
                {isDriver
                  ? "Your next spot is waiting."
                  : "Put your space to work."}
              </p>

              <Link to={isDriver ? "/find-parking" : "/provider"}>
                {isDriver ? "Find parking →" : "List a space →"}
              </Link>
            </div>

            <div className="sidebar-user">
              <div className="sidebar-user-avatar">
                {user?.name?.charAt(0)?.toUpperCase() || "U"}
              </div>
              <div>
                <strong>{user?.name || "User"}</strong>
                <span>{user?.email || ""}</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main dashboard */}
        <div className="dashboard-main">


          <div className="dashboard-content" id="overview">

            {error && (
              <div className="dashboard-error">{error}</div>
            )}

            {dashboardNotice && (
              <div className="dashboard-success">{dashboardNotice}</div>
            )}

            {/* Driver dashboard */}
            {isDriver && (
              <>
                <section className="dashboard-page-heading">
                  <div>
                    <h1>Good morning, {user?.name?.split(" ")[0] || "there"}.</h1>
                    <p>Your next stop, without the parking stress.</p>
                  </div>

                  <Link to="/find-parking" className="dashboard-primary-button">
                    Find parking <span>→</span>
                  </Link>
                </section>

                <section className="overview-stat-grid">
                  <article className="overview-stat-card">
                    <span>Upcoming bookings</span>
                    <strong>{String(upcomingBookings.length).padStart(2, "0")}</strong>
                    <small>Your upcoming parking visits</small>
                  </article>

                  <article className="overview-stat-card">
                    <span>Parking this month</span>
                    <strong>{formatCurrency(currentMonthSpent)}</strong>
                    <small>Based on successful payments</small>
                  </article>

                  <article className="overview-stat-card">
                    <span>Total bookings</span>
                    <strong>{String(bookings.length).padStart(2, "0")}</strong>
                    <small>Your booking activity</small>
                  </article>
                </section>

                <section className="driver-feature-grid">
                  <article className="dashboard-card next-booking-card" id="bookings">
                    <div className="section-title-row">
                      <h2>Your next booking</h2>
                      <Link to="/find-parking">Find another space</Link>
                    </div>

                    {upcomingBookings.length === 0 ? (
                      <div className="dashboard-empty">
                        <p>You don't have an upcoming booking.</p>
                        <Link to="/find-parking">Find Parking</Link>
                      </div>
                    ) : (
                      (() => {
                        const booking = upcomingBookings[0];
                        const space = booking.parkingSpace;
                        const directionsUrl = getDirectionsUrl(space);

                        return (
                          <div className="next-booking-details">
                            <div className="booking-date-tile">
                              <span>
                                {new Date(
                                  booking.startAt || booking.bookingDate
                                ).toLocaleDateString("en-IN", {
                                  month: "short",
                                })}
                              </span>
                              <strong>
                                {new Date(
                                  booking.startAt || booking.bookingDate
                                ).getDate()}
                              </strong>
                            </div>

                            <div className="next-booking-info">
                              <h3>{space?.name || "Parking Space"}</h3>
                              <p>
                                {space?.address || space?.area || "Location unavailable"}
                              </p>
                              <span className={`booking-status ${getStatusClass(booking.status)}`}>
                                {booking.status}
                              </span>
                            </div>

                            <div className="next-booking-actions">
                              <strong>
                                {getBookingTime(booking)} – {getBookingEndTime(booking)}
                              </strong>
                              {directionsUrl && booking.status === "CONFIRMED" && (
                                <a
                                  href={directionsUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Get directions →
                                </a>
                              )}

                              {["PENDING", "CONFIRMED"].includes(booking.status) && (
                                <button
                                  className="cancel-booking-button"
                                  onClick={() => handleCancelBooking(booking)}
                                  disabled={cancellingId === booking.id}
                                >
                                  {cancellingId === booking.id
                                    ? "Cancelling..."
                                    : "Cancel Booking"}
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })()
                    )}
                  </article>

                  <article className="dashboard-card arrival-card">
                    <span className="arrival-label">PARKLY REMINDER</span>
                    <h2>All set for your arrival.</h2>
                    <p>
                      Your parking details and booking information are
                      available in your dashboard.
                    </p>
                    <Link to="/find-parking">Explore parking spaces</Link>
                  </article>
                </section>

                <section className="dashboard-card table-card" id="payments">
                  <div className="section-title-row">
                    <h2>Booking activity</h2>
                    <span>{bookings.length} total bookings</span>
                  </div>

                  {bookings.length === 0 ? (
                    <div className="dashboard-empty">
                      <p>Your booking activity will appear here.</p>
                    </div>
                  ) : (
                    <div className="dashboard-table-wrapper">
                      <table className="dashboard-table">
                        <thead>
                          <tr>
                            <th>SPACE</th>
                            <th>DATE & TIME</th>
                            <th>TOTAL</th>
                            <th>STATUS</th>
                            <th>ACTION</th>
                          </tr>
                        </thead>
                        <tbody>
                          {bookings.map((booking) => (
                            <tr key={booking.id}>
                              <td>
                                <strong>
                                  {booking.parkingSpace?.name || "Parking Space"}
                                </strong>
                                <small>
                                  {booking.parkingSpace?.area || ""}
                                </small>
                              </td>
                              <td>
                                {getBookingDate(booking)}
                                <small>
                                  {getBookingTime(booking)} – {getBookingEndTime(booking)}
                                </small>
                              </td>
                              <td>{formatCurrency(booking.totalPrice)}</td>
                              <td>
                                <span className={`table-status ${getStatusClass(booking.status)}`}>
                                  {booking.status}
                                </span>
                              </td>
                              <td>
                                {["PENDING", "CONFIRMED"].includes(booking.status) ? (
                                  <button
                                    className="cancel-booking-button"
                                    onClick={() => handleCancelBooking(booking)}
                                    disabled={cancellingId === booking.id}
                                  >
                                    {cancellingId === booking.id
                                      ? "Cancelling..."
                                      : "Cancel"}
                                  </button>
                                ) : (
                                  <span className="no-booking-action">—</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>

                <section className="dashboard-card table-card" id="payments-history">
                  <div className="section-title-row">
                    <h2>Payment history</h2>
                    <span>{paidBookings.length} successful payments</span>
                  </div>

                  {paidBookings.length === 0 ? (
                    <div className="dashboard-empty">
                      <p>No successful payments yet.</p>
                    </div>
                  ) : (
                    <div className="dashboard-table-wrapper">
                      <table className="dashboard-table">
                        <thead>
                          <tr>
                            <th>BOOKING</th>
                            <th>DATE</th>
                            <th>AMOUNT</th>
                            <th>PAYMENT</th>
                          </tr>
                        </thead>
                        <tbody>
                          {paidBookings.map((booking) => (
                            <tr key={booking.id}>
                              <td>
                                <strong>
                                  {booking.parkingSpace?.name || "Parking"}
                                </strong>
                                <small>Booking #{booking.id}</small>
                              </td>
                              <td>{getBookingDate(booking)}</td>
                              <td>{formatCurrency(booking.totalPrice)}</td>
                              <td>
                                <span className="table-status completed">
                                  Paid
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>
              </>
            )}

            {/* Provider dashboard */}
            {isProvider && (
              <>
                <section className="dashboard-page-heading">
                  <div>
                    <h1>Your space is working for you.</h1>
                    <p>A little overview of your neighborhood business.</p>
                  </div>

                  <Link to="/provider" className="dashboard-primary-button">
                    + List a space
                  </Link>
                </section>

                <section className="overview-stat-grid provider-stat-grid">
                  <article className="overview-stat-card">
                    <span>Total earnings</span>
                    <strong>{formatCurrency(totalEarnings)}</strong>
                    <small>From successful payments</small>
                  </article>

                  <article className="overview-stat-card">
                    <span>Bookings received</span>
                    <strong>{providerBookings.length}</strong>
                    <small>All booking requests</small>
                  </article>

                  <article className="overview-stat-card">
                    <span>Active spaces</span>
                    <strong>{String(activeSpaces.length).padStart(2, "0")}</strong>
                    <small>{inactiveSpaces.length} inactive listings</small>
                  </article>

                  <article className="overview-stat-card">
                    <span>Paid bookings</span>
                    <strong>{paidProviderBookings.length}</strong>
                    <small>Successfully paid reservations</small>
                  </article>
                </section>

                <section className="provider-overview-grid">
                  <article className="dashboard-card earnings-card" id="earnings">
                    <div className="section-title-row">
                      <div>
                        <h2>Earnings overview</h2>
                        <p className="chart-total">{formatCurrency(totalEarnings)}</p>
                        <small>Total earnings from paid bookings</small>
                      </div>
                    </div>

                    <div className="earnings-chart">
                      {earningsChart.map((item) => (
                        <div className="chart-column" key={item.label}>
                          <strong>
                            {item.amount > 0
                              ? formatCurrency(item.amount)
                              : ""}
                          </strong>
                          <div className="chart-bar-area">
                            <div
                              className="chart-bar"
                              style={{
                                height: `${Math.max(
                                  (item.amount / maxEarnings) * 100,
                                  item.amount > 0 ? 8 : 0
                                )}%`,
                              }}
                            />
                          </div>
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </article>

                  <article className="dashboard-card provider-payout-card">
                    <span className="arrival-label">PARKLY EARNINGS</span>
                    <h2>{formatCurrency(totalEarnings)}</h2>
                    <p>
                      Total value of bookings marked as paid for your
                      parking spaces.
                    </p>
                    <span className="payout-note">
                      Payout tracking coming soon
                    </span>
                  </article>
                </section>

                <section className="dashboard-card table-card" id="spaces">
                  <div className="section-title-row">
                    <h2>Your spaces</h2>
                    <Link to="/provider">Manage spaces →</Link>
                  </div>

                  {spaces.length === 0 ? (
                    <div className="dashboard-empty">
                      <p>You haven't listed any parking spaces yet.</p>
                      <Link to="/provider">List your space</Link>
                    </div>
                  ) : (
                    <div className="dashboard-table-wrapper">
                      <table className="dashboard-table">
                        <thead>
                          <tr>
                            <th>SPACE</th>
                            <th>RATE</th>
                            <th>BOOKINGS</th>
                            <th>STATUS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {spaces.map((space) => {
                            const spaceBookings = providerBookings.filter(
                              (booking) =>
                                booking.parkingSpaceId === space.id
                            );

                            return (
                              <tr key={space.id}>
                                <td>
                                  <strong>{space.name}</strong>
                                  <small>{space.area || space.address}</small>
                                </td>
                                <td>
                                  {formatCurrency(space.pricePerHour)} / hr
                                </td>
                                <td>{spaceBookings.length}</td>
                                <td>
                                  <span
                                    className={`table-status ${
                                      space.available
                                        ? "completed"
                                        : "cancelled"
                                    }`}
                                  >
                                    {space.available ? "Active" : "Inactive"}
                                  </span>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>

                <section className="dashboard-card table-card">
                  <div className="section-title-row">
                    <h2>Booking requests</h2>
                    <span>{providerBookings.length} bookings</span>
                  </div>

                  {providerBookings.length === 0 ? (
                    <div className="dashboard-empty">
                      <p>No bookings received yet.</p>
                    </div>
                  ) : (
                    <div className="dashboard-table-wrapper">
                      <table className="dashboard-table">
                        <thead>
                          <tr>
                            <th>DRIVER</th>
                            <th>PARKING SPACE</th>
                            <th>DATE & TIME</th>
                            <th>AMOUNT</th>
                            <th>STATUS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {providerBookings.map((booking) => (
                            <tr key={booking.id}>
                              <td>
                                <strong>
                                  {booking.user?.name || "Unknown Driver"}
                                </strong>
                                <small>{booking.user?.email || ""}</small>
                              </td>
                              <td>
                                {booking.parkingSpace?.name || "Parking Space"}
                              </td>
                              <td>
                                {getBookingDate(booking)}
                                <small>
                                  {getBookingTime(booking)} – {getBookingEndTime(booking)}
                                </small>
                              </td>
                              <td>{formatCurrency(booking.totalPrice)}</td>
                              <td>
                                <span className={`table-status ${getStatusClass(booking.status)}`}>
                                  {booking.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>
              </>
            )}

            {/* Profile */}
            <section className="dashboard-card profile-card" id="profile">
              <div className="section-title-row">
                <h2>Account information</h2>
              </div>

              <div className="profile-content">
                <div className="profile-avatar">
                  {user?.name?.charAt(0)?.toUpperCase() || "U"}
                </div>
                <div className="profile-identity">
                  <h3>{user?.name || "User"}</h3>
                  <p>{user?.email || "Email unavailable"}</p>
                  <span>{role || "USER"}</span>
                </div>
              </div>
            </section>

            <footer className="dashboard-footer" id="support">
              <span>© {new Date().getFullYear()} Parkly</span>
              <span>Making parking simpler.</span>
            </footer>

          </div>
        </div>
      </div>
    </main>
  );
}

export default UserDashboard;
