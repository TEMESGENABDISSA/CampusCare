import { useLocation, Link } from 'react-router-dom'
import './Confirmation.css'

function Confirmation() {
  const location = useLocation()
  const appointment = location.state?.appointment

  if (!appointment) {
    return (
      <div className="confirmation">
        <div className="error-container">
          <div className="error-icon" aria-hidden="true">⚠️</div>
          <h1 className="error-title">No appointment found</h1>
          <p className="error-description">
            We couldn't find your appointment information.
          </p>
          <Link to="/doctors" className="button error-button">
            Find a Doctor
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="confirmation">
      <div className="confirmation-card">
        <div className="success-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="currentColor"/>
            <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1 className="confirmation-heading">Appointment Confirmed</h1>
        <p className="confirmation-message">
          Your appointment has been successfully booked.
        </p>

        <div className="appointment-details" role="region" aria-label="Appointment details">
          <div className="detail-row">
            <span className="detail-label">Doctor</span>
            <span className="detail-value">{appointment.doctorName}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Student Name</span>
            <span className="detail-value">{appointment.studentName}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Date</span>
            <span className="detail-value">{appointment.appointmentDate}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Time</span>
            <span className="detail-value">{appointment.appointmentTime}</span>
          </div>
        </div>

        <div className="confirmation-actions">
          <Link to="/appointments" className="button view-appointments-button">
            View My Appointments
          </Link>
          <Link to="/doctors" className="button button-secondary find-doctor-button">
            Find Another Doctor
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Confirmation
