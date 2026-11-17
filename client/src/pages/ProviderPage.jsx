
import { useEffect, useState } from "react";
import MapPicker from "../components/MapPicker";
import "./Auth.css";
const API_URL = `${import.meta.env.VITE_API_URL}/api/parking-spaces`;

const emptyForm = {
  name: "",
  address: "",
  area: "",
  pricePerHour: "",
  contactPhone: "",
  covered: false,
  evCharging: false,
  access24x7: false,
};

function ProviderPage() {
  const [form, setForm] = useState(emptyForm);
  const [location, setLocation] = useState(null);
  const [spaces, setSpaces] = useState([]);
  const [notice, setNotice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [editingId, setEditingId] = useState(null);

  // Fetch existing parking listings
  const fetchSpaces = async () => {
    const response = await fetch(`${API_URL}/mine`, {
      credentials: "include",
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Failed to load listings.");
    }

    setSpaces(result.data);
  };

  useEffect(() => {
    const loadSpaces = async () => {
      try {
        await fetchSpaces();
      } catch (error) {
        console.error("Failed to fetch parking spaces:", error);

        setNotice({
          type: "error",
          text: error.message || "Please log in to manage your listings.",
        });
      }
    };

    loadSpaces();
  }, []);

  // Handle form changes
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Reset form and cancel editing
  const cancelEdit = () => {
    setEditingId(null);
    setForm(emptyForm);
    setLocation(null);
    setNotice(null);
  };

  // Load listing details into the form
  const handleEdit = (space) => {
    setEditingId(space.id);

    setForm({
      name: space.name || "",
      address: space.address || "",
      area: space.area || "",
      pricePerHour: String(space.pricePerHour ?? ""),
      contactPhone: space.contactPhone || "",
      covered: space.covered === true,
      evCharging: space.evCharging === true,
      access24x7: space.access24x7 === true,
    });

    if (
      Number.isFinite(Number(space.latitude)) &&
      Number.isFinite(Number(space.longitude)) &&
      space.latitude !== null &&
      space.longitude !== null
    ) {
      setLocation({
        latitude: Number(space.latitude),
        longitude: Number(space.longitude),
      });
    } else {
      setLocation(null);
    }

    setNotice({
      type: "ok",
      text: "You are editing this parking listing.",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Publish or update parking space
  const handleSubmit = async (event) => {
    event.preventDefault();
    setNotice(null);

    if (!location) {
      setNotice({
        type: "error",
        text: "Please select the exact parking location on the map.",
      });
      return;
    }

    try {
      setLoading(true);

      const isEditing = editingId !== null;

      const response = await fetch(
        isEditing ? `${API_URL}/${editingId}` : API_URL,
        {
          method: isEditing ? "PATCH" : "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...form,
            pricePerHour: Number(form.pricePerHour),
            latitude: location.latitude,
            longitude: location.longitude,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            (isEditing
              ? "Could not update parking space."
              : "Could not publish parking space.")
        );
      }

      setNotice({
        type: "ok",
        text: isEditing
          ? "Parking listing updated successfully."
          : "Your parking space has been published successfully.",
      });

      setForm(emptyForm);
      setLocation(null);
      setEditingId(null);

      await fetchSpaces();
    } catch (error) {
      setNotice({
        type: "error",
        text: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  // Soft delete parking space
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this parking listing?"
    );

    if (!confirmed) return;

    try {
      setDeletingId(id);
      setNotice(null);

      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Could not delete listing.");
      }

      if (editingId === id) {
        setEditingId(null);
        setForm(emptyForm);
        setLocation(null);
      }

      setNotice({
        type: "ok",
        text: "Parking listing removed successfully.",
      });

      await fetchSpaces();
    } catch (error) {
      setNotice({
        type: "error",
        text: error.message,
      });
    } finally {
      setDeletingId(null);
    }
  };

  const features = (space) =>
    [
      space.covered && "Covered",
      space.evCharging && "EV charging",
      space.access24x7 && "24/7 access",
    ]
      .filter(Boolean)
      .join(" · ") || "Open parking";

  return (
    <main className="page provider-page">
      <section className="provider-header">
        <p className="eyebrow">FOR PARKING OWNERS</p>
        <h1>List your parking space.</h1>
        <p className="page-sub">
          Share your available parking space with drivers across Mumbai.
          Add your details and select its exact location on the map.
        </p>
      </section>

      <section className="provider-form-section">
        <div className="provider-section-heading">
          <h2>
            {editingId !== null
              ? "Edit parking space details"
              : "Parking space details"}
          </h2>
          <p>
            {editingId !== null
              ? "Update the information about your parking space."
              : "Enter the information drivers need before choosing your space."}
          </p>
        </div>

        <form className="provider-form" onSubmit={handleSubmit}>
          <div className="provider-form-grid">
            <div className="field">
              <label htmlFor="name">Parking space name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="e.g. Covered Parking - Bandra"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="pricePerHour">Price per hour (₹)</label>
              <input
                id="pricePerHour"
                name="pricePerHour"
                type="number"
                min="1"
                placeholder="e.g. 50"
                value={form.pricePerHour}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field full">
              <label htmlFor="address">Full address</label>
              <input
                id="address"
                name="address"
                type="text"
                placeholder="Building, street, landmark..."
                value={form.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="area">Area</label>
              <input
                id="area"
                name="area"
                type="text"
                placeholder="e.g. Bandra West"
                value={form.area}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="contactPhone">Contact number</label>
              <input
                id="contactPhone"
                name="contactPhone"
                type="tel"
                placeholder="Your contact number"
                value={form.contactPhone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="provider-features">
            <p className="group-label">Parking facilities</p>

            <div className="checks">
              <label className="check">
                <input
                  type="checkbox"
                  name="covered"
                  checked={form.covered}
                  onChange={handleChange}
                />
                Covered parking
              </label>

              <label className="check">
                <input
                  type="checkbox"
                  name="evCharging"
                  checked={form.evCharging}
                  onChange={handleChange}
                />
                EV charging
              </label>

              <label className="check">
                <input
                  type="checkbox"
                  name="access24x7"
                  checked={form.access24x7}
                  onChange={handleChange}
                />
                24/7 access
              </label>
            </div>
          </div>

          <div className="provider-location-section">
            <div className="provider-section-heading">
              <h2>Choose parking location</h2>
              <p>
                Click on the map to place a marker at your parking space.
              </p>
            </div>

            <div className="map-box provider-map-box">
              <MapPicker
                value={location}
                onLocationSelect={setLocation}
              />
            </div>

          </div>

          {notice && (
            <p className={`notice ${notice.type}`}>
              {notice.text}
            </p>
          )}

          <button className="submit" type="submit" disabled={loading}>
            {loading
              ? editingId !== null
                ? "Saving Changes..."
                : "Publishing..."
              : editingId !== null
                ? "Save Changes"
                : "Publish Parking Space"}
          </button>

          {editingId !== null && (
            <button
              type="button"
              className="delete-button"
              onClick={cancelEdit}
              disabled={loading}
            >
              Cancel Editing
            </button>
          )}
        </form>
      </section>

      <section className="provider-listings">
        <div className="listings-heading">
          <div>
            <p className="eyebrow">YOUR DASHBOARD</p>
            <h2>Your parking listings</h2>
            <p className="page-sub">
              Manage the parking spaces you have published on Parkly.
            </p>
          </div>

          <span className="listing-count">
            {spaces.length} {spaces.length === 1 ? "Space" : "Spaces"}
          </span>
        </div>

        {spaces.length === 0 ? (
          <div className="listing-empty">
            <h3>No parking spaces yet</h3>
            <p>Your published parking spaces will appear here.</p>
          </div>
        ) : (
          <div className="provider-list">
            {spaces.map((space) => (
              <article className="provider-card" key={space.id}>
                <div className="provider-card-info">
                  <h3>{space.name}</h3>
                  <p>
                    {space.address}, {space.area}
                  </p>
                  <p>{features(space)}</p>

                  {space.contactPhone && (
                    <a href={`tel:${space.contactPhone}`}>
                      {space.contactPhone}
                    </a>
                  )}
                </div>

                <div className="provider-card-actions">
                  <div className="price">
                    ₹{space.pricePerHour}
                    <span> / hr</span>
                  </div>

                  <button
                    type="button"
                    className="edit-button"
                    onClick={() => handleEdit(space)}
                    disabled={loading || deletingId === space.id}
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    className="delete-button"
                    onClick={() => handleDelete(space.id)}
                    disabled={deletingId === space.id || loading}
                  >
                    {deletingId === space.id ? "Removing..." : "Delete"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default ProviderPage;
