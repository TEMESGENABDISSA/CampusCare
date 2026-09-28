import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-label">Student Healthcare</span>
            <h1 className="hero-title">
              Healthcare Made Simple for Students
            </h1>
            <p className="hero-description">
              Find the right doctor, choose a convenient appointment time, and take care of your health without unnecessary waiting.
            </p>
            <div className="hero-actions">
              <Link to="/doctors" className="hero-button primary">
                Find a Doctor
              </Link>
              <Link to="/appointments" className="hero-button secondary">
                View Appointments
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-card">
              <div className="visual-icon">✚</div>
              <div className="visual-circle"></div>
              <div className="visual-circle small"></div>
              <div className="visual-circle smaller"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="features-heading">How It Works</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3 className="feature-title">Find Doctors</h3>
            <p className="feature-description">
              Browse doctors by department and specialty.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <h3 className="feature-title">Easy Booking</h3>
            <p className="feature-description">
              Choose an available appointment time that works for you.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📋</div>
            <h3 className="feature-title">Stay Organized</h3>
            <p className="feature-description">
              Keep track of your upcoming appointments.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust">
        <div className="trust-content">
          <h3 className="trust-title">Designed for University Students</h3>
          <p className="trust-description">
            CampusCare is built specifically for students to easily access campus health services. Book appointments with campus doctors, manage your healthcare needs, and stay healthy throughout your academic journey.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home
