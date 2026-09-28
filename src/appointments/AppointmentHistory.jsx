import { useAppointments } from './AppointmentContext'
import { doctors } from '../api/doctors'
import './AppointmentHistory.css'

function AppointmentHistory() {
  const { appointments } = useAppointments()

  if (appointments.length === 0) {
    return (
      <div className="appointment-history">
        <h1 className="history-heading">My Appointments</h1>
        <p className="no-appointments">No appointments yet.</p>
      </div>
    )
  }

  return (
    <div className="appointment-history">
      <h1 className="history-heading">My Appointments</h1>
      <div className="appointments-list">
        {appointments.map((appointment) => {
          const doctor = doctors.find(d => d.id === appointment.doctorId)
          return (
            <div key={appointment.id} className="appointment-card">
              <div className="appointment-header">
                <h2 className="doctor-name">{appointment.doctorName}</h2>
                <span className="appointment-status">Confirmed</span>
              </div>

              <div className="appointment-details">
                <div className="detail-item">
                  <span className="detail-label">Department:</span>
                  <span className="detail-value">{doctor?.department || 'N/A'}</span>
                </div>

                <div className="detail-item">
                  <span className="detail-label">Student Name:</span>
                  <span className="detail-value">{appointment.studentName}</span>
                </div>

                <div className="detail-item">
                  <span className="detail-label">Date:</span>
                  <span className="detail-value">{appointment.appointmentDate}</span>
                </div>

                <div className="detail-item">
                  <span className="detail-label">Time:</span>
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
