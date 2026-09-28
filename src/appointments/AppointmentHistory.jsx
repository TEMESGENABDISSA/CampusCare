import { useAppointments } from './AppointmentContext'
import { doctors } from '../api/doctors'
import { Link } from 'react-router-dom'
import './AppointmentHistory.css'

function AppointmentHistory() {
  const { appointments } = useAppointments()

  if (appointments.length === 0) {
    return (
      <div className="appointment-history">
        <div className="history-header">
          <h1 className="history-heading">My Appointments</h1>
          <p className="history-subtitle">
            Manage and review your upcoming clinic appointments.
          </p>
        </div>
        <div className="empty-state">
          <div className="empty-icon">📅</div>
          <h3 className="empty-title">No appointments yet</h3>
          <p className="empty-description">
            You haven't booked any appointments yet. Find a doctor to get started.
          </p>
          <Link to="/doctors" className="empty-action-button">
            Find a Doctor
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="appointment-history">
      <div className="history-header">
        <h1 className="history-heading">My Appointments</h1>
        <p className="history-subtitle">
          Manage and review your upcoming clinic appointments.
        </p>
      </div>
      <div className="appointments-list">
        {appointments.map((appointment) => {
          const doctor = doctors.find(d => d.id === appointment.doctorId)
          return (
            <div key={appointment.id} className="appointment-card">
              <div className="appointment-header">
                <h2 className="doctor-name">{appointment.doctorName}</h2>
                <span className="appointment-status confirmed">Confirmed</span>
              </div>

              <div className="appointment-details">
                <div className="detail-item">
                  <span className="detail-label">Department</span>
                  <span className="detail-value">{doctor?.department || 'N/A'}</span>
                </div>

                <div className="detail-item">
                  <span className="detail-label">Date</span>
                  <span className="detail-value">{appointment.appointmentDate}</span>
                </div>

                <div className="detail-item">
                  <span className="detail-label">Time</span>
                  <span className="detail-value">{appointment.appointmentTime}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AppointmentHistory
