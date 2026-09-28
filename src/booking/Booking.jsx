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

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    appointmentDate: '',
    appointmentTime: '',
    reason: ''
  })

  const validateForm = () => {
    const newErrors = {}

    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required'
    } else if (!/^\d{10,}$/.test(phoneNumber.replace(/\D/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid phone number (at least 10 digits)'
    }

    if (!appointmentDate) {
      newErrors.appointmentDate = 'Appointment date is required'
    }

    if (!appointmentTime) {
      newErrors.appointmentTime = 'Appointment time is required'
    }

    if (!reason.trim()) {
      newErrors.reason = 'Reason for visit is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
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
            onChange={(e) => {
              setFullName(e.target.value)
              setErrors({ ...errors, fullName: '' })
            }}
            className={errors.fullName ? 'error' : ''}
          />
          {errors.fullName && <span className="error-message">{errors.fullName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setErrors({ ...errors, email: '' })
            }}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value)
              setErrors({ ...errors, phoneNumber: '' })
            }}
            className={errors.phoneNumber ? 'error' : ''}
          />
          {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="appointmentDate">Appointment Date</label>
          <input
            type="date"
            id="appointmentDate"
            value={appointmentDate}
            onChange={(e) => {
              setAppointmentDate(e.target.value)
              setErrors({ ...errors, appointmentDate: '' })
            }}
            className={errors.appointmentDate ? 'error' : ''}
          />
          {errors.appointmentDate && <span className="error-message">{errors.appointmentDate}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="appointmentTime">Appointment Time</label>
          <input
            type="time"
            id="appointmentTime"
            value={appointmentTime}
            onChange={(e) => {
              setAppointmentTime(e.target.value)
              setErrors({ ...errors, appointmentTime: '' })
            }}
            className={errors.appointmentTime ? 'error' : ''}
          />
          {errors.appointmentTime && <span className="error-message">{errors.appointmentTime}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="reason">Reason for Visit</label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e) => {
              setReason(e.target.value)
              setErrors({ ...errors, reason: '' })
            }}
            rows={4}
            className={errors.reason ? 'error' : ''}
          />
          {errors.reason && <span className="error-message">{errors.reason}</span>}
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
