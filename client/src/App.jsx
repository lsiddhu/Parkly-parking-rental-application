
import { useEffect, useState, useCallback  } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";

import UserDashboard from "./pages/UserDashboard";
import DriverPage from "./pages/DriverPage";
import ProviderPage from "./pages/ProviderPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import "./App.css";

const API_URL = "http://localhost:5000/api/auth";

// PROTECTED PROVIDER ROUTE
function ProtectedProviderRoute({ user, onAccessDenied }) {
  useEffect(() => {
    if (!user || (user.role !== "PROVIDER" && user.role !== "BOTH")) {
      onAccessDenied();
    }
  }, [user, onAccessDenied]);

  if (!user || (user.role !== "PROVIDER" && user.role !== "BOTH")) {
    return <Navigate to="/" replace />;
  }

  return <ProviderPage />;
}
// PROTECTED USER DASHBOARD
function ProtectedDashboardRoute({ user }) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <UserDashboard user={user} />;
}

// NAVBAR
function Navbar({ user, onLogout, onListSpace, onOpenLogin }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await onLogout();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="navbar">
      <Link to="/" className="brand">
        Parkly<span>.</span>
      </Link>
      <span className="greeting-msg">Hello,  {user?.name || "Guest"}</span>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/find-parking">
          Find Your Space
        </NavLink>

        <NavLink
          to="/provider"
          onClick={(event) => {
            event.preventDefault();
            onListSpace();
          }}
        >
          List Your Space
        </NavLink>

        {user && (
          <NavLink to="/dashboard">
            Dashboard
          </NavLink>
        )}

        {user ? (
          <button
            type="button"
            onClick={handleLogout}
            className="auth-button"
          >
            Log Out
          </button>
        ) : (
          <button
            type="button"
            className="auth-button"
            onClick={onOpenLogin}
          >
            Log In
          </button>
        )}
      </nav>
    </header>
  );
}

// FOOTER
function Footer({ onListSpace }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Parkly.
          </Link>
          <p>
            Making parking simpler by connecting drivers with
            available parking spaces.
          </p>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <Link to="/">Home</Link>
          <Link to="/find-parking">Find Parking</Link>
          <a
            href="/provider"
            onClick={(event) => {
              event.preventDefault();
              onListSpace();
            }}
          >
            List Your Space
          </a>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <a>Siddharth Lawand</a>
          <a href="mailto:lawandsiddharth1605@gmail.com">
            lawandsiddharth1605@gmail.com
          </a>
          <span>Navi Mumbai, Maharashtra, India</span>
        </div>

        <div className="footer-column">
          <h3>Follow Us</h3>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/in/siddharth-lawand-3ab943426/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Parkly. All rights reserved.</p>
      </div>
    </footer>
  );
}

// HOME PAGE
function HomePage({ onListSpace }) {
  return (
    <main>
      <section className="home-hero">
        <div className="hero-content">
          <p className="eyebrow">SMARTER PARKING. SIMPLER DAYS.</p>

          <h1>
            Parking made
            <br />
            simple.
          </h1>

          <p className="hero-description">
            Discover convenient parking spaces around Mumbai
            or make better use of your unused parking space
            with Parkly.
          </p>

          <div className="hero-links">
            <Link to="/find-parking" className="primary-link">
              Find Your Space
            </Link>

            <a
              href="/provider"
              className="secondary-link"
              onClick={(event) => {
                event.preventDefault();
                onListSpace();
              }}
            >
              List Your Space →
            </a>
          </div>
        </div>

        <div className="logo-container">
          <img
            src="/parkly-logo.JPG"
            alt="Parkly Logo"
            className="logo"
          />
        </div>
      </section>

      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <section className="info-section">
          <div className="section-heading">
            <p className="eyebrow">ABOUT PARKLY</p>
            <h2>What is Parkly?</h2>
            <p>
              Parkly connects people looking for parking with
              property owners who have available parking spaces.
              Our goal is to make finding and listing parking
              easier, more convenient, and accessible.
            </p>
          </div>
        </section>
      </div>

      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <section className="info-section benefits-section">
          <div className="section-heading">
            <p className="eyebrow">WHY PARKLY</p>
            <h2>A better way to park.</h2>
          </div>

          <div className="benefits-grid">
            <article className="benefit-card">
              <h3>Save time</h3>
              <p>
                Discover available parking instead of spending
                time searching for a spot.
              </p>
            </article>

            <article className="benefit-card">
              <h3>Know the price</h3>
              <p>
                Compare hourly parking prices before choosing
                your space.
              </p>
            </article>

            <article className="benefit-card">
              <h3>Find nearby spaces</h3>
              <p>
                Explore parking locations across different
                areas of Mumbai.
              </p>
            </article>

            <article className="benefit-card">
              <h3>Earn from your space</h3>
              <p>
                Let parking-space owners list unused spaces
                and connect with potential drivers.
              </p>
            </article>
          </div>
        </section>
      </div>

      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <section className="info-section how-section">
          <div className="section-heading">
            <p className="eyebrow">HOW IT WORKS</p>
            <h2>Simple for everyone.</h2>
          </div>

          <div className="steps-grid">
            <article className="step-card">
              <span className="step-number">01</span>
              <h3>Find a space</h3>
              <p>
                Search by area and explore parking locations
                on the map.
              </p>
            </article>

            <article className="step-card">
              <span className="step-number">02</span>
              <h3>Compare options</h3>
              <p>
                Check prices, addresses, and available
                parking features.
              </p>
            </article>

            <article className="step-card">
              <span className="step-number">03</span>
              <h3>List your space</h3>
              <p>
                Add your parking details and location to
                make your space discoverable.
              </p>
            </article>
          </div>
        </section>
      </div>

      {/* Coming features section */}
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <section className="info-section coming-features-section">
          <div className="section-heading">
            <p className="eyebrow">COMING SOON</p>
            <h2>More possibilities ahead.</h2>
            <p>
              We're constantly working to make your parking
              experience better. Here's what's coming next.
            </p>
          </div>

          <div className="steps-grid coming-features-grid">
            <article className="step-card coming-feature-card">
              <span className="step-number">01</span>
              <h3>Smart Notifications</h3>
              <p>
                Get timely booking updates, reminders, and
                important parking notifications.
              </p>
            </article>

            <article className="step-card coming-feature-card">
              <span className="step-number">02</span>
              <h3>Monthly Parking Plans</h3>
              <p>
                Explore convenient long-term parking options
                with flexible monthly plans.
              </p>
            </article>

            <article className="step-card coming-feature-card">
              <span className="step-number">03</span>
              <h3>Saved Parking Spaces</h3>
              <p>
                Save your favourite parking locations and
                find them easily whenever you need them.
              </p>
            </article>
          </div>
        </section>
      </div>

      {/* TRUST SECTION */}
      <div data-aos="fade-up">
        <section className="info-section trust-section">
          <div className="section-heading">
            <p className="eyebrow">WHY PARKLY</p>
            <h2>Good neighbors. Great parking.</h2>
          </div>

          <div className="trust-grid">
            <article className="trust-item">
              <span className="trust-check">✓</span>
              <div>
                <h3>Clear space details</h3>
                <p>
                  Explore parking locations, prices and
                  available facilities before booking.
                </p>
              </div>
            </article>

            <article className="trust-item">
              <span className="trust-check">✓</span>
              <div>
                <h3>Secure payments</h3>
                <p>
                  Complete your bookings through
                  integrated online payment processing.
                </p>
              </div>
            </article>

            <article className="trust-item">
              <span className="trust-check">✓</span>
              <div>
                <h3>You're in control</h3>
                <p>
                  Manage your parking listings and
                  keep track of your bookings.
                </p>
              </div>
            </article>
          </div>
        </section>
      </div>

      {/* FAQ SECTION */}
      <div data-aos="fade-up">
        <section className="info-section faq-section">
          <div className="faq-intro">
            <p className="eyebrow">FAQ</p>
            <h2>
              A few things
              <br />
              you might wonder.
            </h2>
            <p>
              Parking, without the question marks.
            </p>
          </div>

          <div className="faq-list">
            <details className="faq-item">
              <summary>
                Can I be a driver and a provider?
                <span>+</span>
              </summary>
              <p>
                Absolutely. Choose the BOTH role when
                registering to book parking and manage
                your own parking spaces.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                How do payments work?
                <span>+</span>
              </summary>
              <p>
                Pay online through Razorpay when booking.
                You can view your booking and payment
                details from your dashboard.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                Can I cancel a booking?
                <span>+</span>
              </summary>
              <p>
                Yes. You can cancel eligible bookings
                from your dashboard. Refund processing
                depends on the payment and refund status.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                How can I list my parking space?
                <span>+</span>
              </summary>
              <p>
                Create a provider account, add your
                parking details, select its location
                and publish your listing.
              </p>
            </details>
          </div>
        </section>
      </div>



    </main>
  );
}

// WARNING POPUP
function LoginWarning({ user, onClose, onLogin, onRegister }) {
  const isLoggedIn = Boolean(user);

  return (
    <div className="warning-overlay" onClick={onClose}>
      <div
        className="warning-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="warning-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="warning-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <div className="warning-icon">!</div>

        <h2 id="warning-title">
          {isLoggedIn ? "Provider account required" : "Login required"}
        </h2>

        <p>
          {isLoggedIn
            ? "Your current account does not have provider access. You need a Provider account to list your parking space."
            : "Please log in or create an account before listing your parking space on Parkly."}
        </p>

        {!isLoggedIn && (
          <div className="warning-actions">
            <button
              type="button"
              className="warning-login"
              onClick={onLogin}
            >
              Log In
            </button>

            <button
              type="button"
              className="warning-register"
              onClick={onRegister}
            >
              Create Account
            </button>
          </div>
        )}

        <button
          type="button"
          className="warning-cancel"
          onClick={onClose}
        >
          Maybe later
        </button>
      </div>
    </div>
  );
}
//after successful booking, this page will show the booking details and directions to the parking space
function BookingSuccessPage() {
  const location = useLocation();
  const booking = location.state?.booking;

  if (!booking) {
    return (
      <main className="page booking-success-page">
        <h2>Booking details unavailable</h2>
        <p>Please check your bookings or find a parking space.</p>
        <Link to="/find-parking" className="primary-link">
          Find Parking
        </Link>
      </main>
    );
  }

  const space = booking.parkingSpace;
  const coordinatesAvailable =
    space?.latitude !== null &&
    space?.latitude !== undefined &&
    space?.longitude !== null &&
    space?.longitude !== undefined &&
    Number.isFinite(Number(space.latitude)) &&
    Number.isFinite(Number(space.longitude));

  const directionsUrl = coordinatesAvailable
    ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
        `${space.latitude},${space.longitude}`
      )}`
    : null;

  return (
    <main className="page booking-success-page">
      <section className="booking-success-card">
        <div className="success-icon">✓</div>

        <p className="eyebrow">PARKLY BOOKING CONFIRMATION</p>
        <h1>Payment Successful!</h1>

        <p className="success-description">
          Your payment has been verified and your parking
          space has been confirmed.
        </p>

        <div className="booking-status">
          <div>
            <span>Payment Status</span>
            <strong className="status-paid">Paid</strong>
          </div>
          <div>
            <span>Parking Status</span>
            <strong className="status-confirmed">Confirmed</strong>
          </div>
        </div>

        <div className="success-booking-details">
          <h2>{space?.name}</h2>
          <p>{space?.address}, {space?.area}, Mumbai</p>

          <div className="success-detail-row">
            <span>Booking ID</span>
            <strong>#{booking.id}</strong>
          </div>

          <div className="success-detail-row">
            <span>Booking Date</span>
            <strong>
              {new Date(booking.startAt).toLocaleString("en-IN")}
            </strong>
          </div>

          <div className="success-detail-row">
            <span>Duration</span>
            <strong>{booking.durationHours} hours</strong>
          </div>

          <div className="success-detail-row">
            <span>Total Paid</span>
            <strong>₹{booking.totalAmount}</strong>
          </div>

          {space?.contactPhone && (
            <div className="success-detail-row">
              <span>Provider Contact</span>
              <strong>{space.contactPhone}</strong>
            </div>
          )}
        </div>

        {directionsUrl && (
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="directions-button success-directions"
          >
            Get Directions to Your Parking →
          </a>
        )}

        <Link to="/find-parking" className="success-back-link">
          Back to Find Parking
        </Link>
      </section>
    </main>
  );
}

// APP CONTENT - INSIDE BROWSER ROUTER
function AppContent({
  user,
  setUser,
  onLogout,
  showLoginWarning,
  setShowLoginWarning,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  // AOS (ANIMATE ON SCROLL) HANDLER
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px 0px 0px",
      }
    );

    const aosElements = document.querySelectorAll("[data-aos]");
    aosElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  const handleListSpace = () => {
    if (!user) {
      setShowLoginWarning(true);
      return;
    }

    if (user.role === "PROVIDER" || user.role === "BOTH") {
      navigate("/provider");
    } else {
      setShowLoginWarning(true);
    }
  };
  const handleAccessDenied = useCallback(() => {
    setShowLoginWarning(true);
  }, [setShowLoginWarning]);

  return (
    <>
      <Navbar
        user={user}
        onLogout={onLogout}
        onListSpace={handleListSpace}
        onOpenLogin={() => navigate("/login")}
      />

      <div key={location.pathname} className="page-transition-wrapper">
        <Routes location={location}>
          <Route
            path="/"
            element={<HomePage onListSpace={handleListSpace} />}
          />

          <Route
            path="/find-parking"
            element={<DriverPage />}
          />
          <Route
            path="/booking-success"
            element={<BookingSuccessPage />}
          />

          <Route
            path="/provider"
            element={
              <ProtectedProviderRoute
                user={user}
                onAccessDenied={handleAccessDenied}
              />
            }
          />

          <Route
            path="/dashboard"
            element={<ProtectedDashboardRoute user={user} />}
          />

          <Route
            path="/login"
            element={<LoginPage onLogin={setUser} />}
          />

          <Route
            path="/register"
            element={<RegisterPage />}
          />
        </Routes>
      </div>

      <Footer onListSpace={handleListSpace} />

      {showLoginWarning && (
        <LoginWarning
          user={user}
          onClose={() => setShowLoginWarning(false)}
          onLogin={() => {
            setShowLoginWarning(false);
            navigate("/login");
          }}
          onRegister={() => {
            setShowLoginWarning(false);
            navigate("/register");
          }}
        />
      )}
    </>
  );
}

// MAIN APP
function App() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [showLoginWarning, setShowLoginWarning] = useState(false);

  // RESTORE LOGIN SESSION
  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch(`${API_URL}/me`, {
          credentials: "include",
        });

        const result = await response.json();

        if (response.ok && result.success) {
          setUser(result.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Session check failed:", error);
        setUser(null);
      } finally {
        setAuthLoading(false);
      }
    };

    checkSession();
  }, []);

  // LOGOUT
  const handleLogout = async () => {
    const response = await fetch(`${API_URL}/logout`, {
      method: "POST",
      credentials: "include",
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Logout failed.");
    }

    setUser(null);
  };

  if (authLoading) {
    return <p>Loading Parkly...</p>;
  }

  return (
    <BrowserRouter>
      <AppContent
        user={user}
        setUser={setUser}
        onLogout={handleLogout}
        showLoginWarning={showLoginWarning}
        setShowLoginWarning={setShowLoginWarning}
      />
    </BrowserRouter>
  );
}

export default App;
