import { useLocation, Link } from 'react-router-dom'
import './Confirmation.css'

function Confirmation() {
  const location = useLocation()
  const appointment = location.state?.appointment

  if (!appointment) {
    return (
      <div className="confirmation">
        <p className="error-message">No appointment information found.</p>
        <Link to="/" className="home-link">Return Home</Link>
      </div>
    )
  }

  return (
    <div className="confirmation">
      <div className="confirmation-card">
        <div className="success-icon">✓</div>
        <h1 className="confirmation-heading">Appointment Confirmed!</h1>
        <p className="confirmation-message">
          Your appointment has been successfully booked.
        </p>

        <div className="appointment-details">
          <h2 className="details-heading">Appointment Details</h2>

          <div className="detail-row">
            <span className="detail-label">Doctor:</span>
            <span className="detail-value">{appointment.doctorName}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Student Name:</span>
            <span className="detail-value">{appointment.studentName}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Date:</span>
            <span className="detail-value">{appointment.appointmentDate}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Time:</span>
            <span className="detail-value">{appointment.appointmentTime}</span>
          </div>
        </div>

        <div className="confirmation-actions">
          <Link to="/appointments" className="view-appointments-button">
            View My Appointments
          </Link>
          <Link to="/" className="home-button">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Confirmation
