import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { doctors } from '../api/doctors'
import './Booking.css'

function Booking() {
  const { id } = useParams()
  const doctor = doctors.find(d => d.id === parseInt(id))

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [appointmentDate, setAppointmentDate] = useState('')
  const [appointmentTime, setAppointmentTime] = useState('')
  const [reason, setReason] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission will be implemented later
    console.log('Form submitted:', {
      doctorId: id,
      fullName,
      email,
      phoneNumber,
      appointmentDate,
      appointmentTime,
      reason
    })
  }

  if (!doctor) {
    return (
      <div className="booking">
        <p className="not-found">Doctor Not Found</p>
      </div>
    )
  }

  return (
    <div className="booking">
      <h1 className="booking-heading">Book Appointment</h1>
      <p className="booking-subtitle">with {doctor.name}</p>

      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="appointmentDate">Appointment Date</label>
          <input
            type="date"
            id="appointmentDate"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="appointmentTime">Appointment Time</label>
          <input
            type="time"
            id="appointmentTime"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="reason">Reason for Visit</label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            rows={4}
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button">
            Book Appointment
          </button>
          <Link to={`/doctors/${id}`} className="cancel-button">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Booking
