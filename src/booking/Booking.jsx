import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { doctors } from '../api/doctors'
import { useAppointments } from '../appointments/AppointmentContext'
import './Booking.css'

function Booking() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addAppointment } = useAppointments()
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
      const appointment = {
        id: Date.now(),
        doctorId: parseInt(id),
        doctorName: doctor.name,
        studentName: fullName,
        email,
        phoneNumber,
        appointmentDate,
        appointmentTime,
        reason,
        createdAt: new Date().toISOString()
      }

      addAppointment(appointment)

      navigate('/confirmation', { state: { appointment } })
    }
  }

  if (!doctor) {
    return (
      <div className="booking">
        <div className="not-found-container">
          <div className="not-found-icon" aria-hidden="true">📅</div>
          <h1 className="not-found-title">Doctor not found</h1>
          <p className="not-found-description">
            The doctor you're trying to book with could not be found.
          </p>
          <Link to="/doctors" className="button error-button">
            Find a Doctor
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="booking">
      <div className="booking-container">
        {/* Appointment Summary */}
        <div className="appointment-summary">
          <h2 className="summary-title">Appointment Summary</h2>
          <div className="summary-card">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="summary-image"
            />
            <div className="summary-info">
              <h3 className="summary-doctor-name">{doctor.name}</h3>
              <p className="summary-department">{doctor.department}</p>
              <p className="summary-specialty">{doctor.specialty}</p>
            </div>
          </div>
          
          {(appointmentDate || appointmentTime) && (
            <div className="summary-details">
              {appointmentDate && (
                <div className="summary-detail-item">
                  <span className="detail-label">Date</span>
                  <span className="detail-value">{appointmentDate}</span>
                </div>
              )}
              {appointmentTime && (
                <div className="summary-detail-item">
                  <span className="detail-label">Time</span>
                  <span className="detail-value">{appointmentTime}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Booking Form */}
        <div className="booking-form-section">
          <h1 className="booking-heading">Book Appointment</h1>
          <p className="booking-subtitle">Complete the form below to schedule your appointment</p>

          <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value)
                setErrors({ ...errors, fullName: '' })
              }}
              placeholder="Enter your full name"
              className={errors.fullName ? 'error' : ''}
              aria-invalid={errors.fullName ? 'true' : 'false'}
              aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            />
            {errors.fullName && <span id="fullName-error" className="error-message" role="alert" aria-live="polite">{errors.fullName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setErrors({ ...errors, email: '' })
              }}
              placeholder="your.email@example.com"
              className={errors.email ? 'error' : ''}
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && <span id="email-error" className="error-message" role="alert" aria-live="polite">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">
              Phone Number <span className="required">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value)
                setErrors({ ...errors, phoneNumber: '' })
              }}
              placeholder="Enter your phone number"
              className={errors.phoneNumber ? 'error' : ''}
              aria-invalid={errors.phoneNumber ? 'true' : 'false'}
              aria-describedby={errors.phoneNumber ? 'phoneNumber-error' : undefined}
            />
            {errors.phoneNumber && <span id="phoneNumber-error" className="error-message" role="alert" aria-live="polite">{errors.phoneNumber}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="appointmentDate">
              Appointment Date <span className="required">*</span>
            </label>
            <input
              type="date"
              id="appointmentDate"
              value={appointmentDate}
              onChange={(e) => {
                setAppointmentDate(e.target.value)
                setErrors({ ...errors, appointmentDate: '' })
              }}
              className={errors.appointmentDate ? 'error' : ''}
              aria-invalid={errors.appointmentDate ? 'true' : 'false'}
              aria-describedby={errors.appointmentDate ? 'appointmentDate-error' : undefined}
            />
            {errors.appointmentDate && <span id="appointmentDate-error" className="error-message" role="alert" aria-live="polite">{errors.appointmentDate}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="appointmentTime">
              Appointment Time <span className="required">*</span>
            </label>
            <input
              type="time"
              id="appointmentTime"
              value={appointmentTime}
              onChange={(e) => {
                setAppointmentTime(e.target.value)
                setErrors({ ...errors, appointmentTime: '' })
              }}
              className={errors.appointmentTime ? 'error' : ''}
              aria-invalid={errors.appointmentTime ? 'true' : 'false'}
              aria-describedby={errors.appointmentTime ? 'appointmentTime-error' : undefined}
            />
            {errors.appointmentTime && <span id="appointmentTime-error" className="error-message" role="alert" aria-live="polite">{errors.appointmentTime}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="reason">
              Reason for Visit <span className="required">*</span>
            </label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => {
                setReason(e.target.value)
                setErrors({ ...errors, reason: '' })
              }}
              rows={4}
              placeholder="Please describe the reason for your visit"
              className={errors.reason ? 'error' : ''}
              aria-invalid={errors.reason ? 'true' : 'false'}
              aria-describedby={errors.reason ? 'reason-error' : undefined}
            />
            {errors.reason && <span id="reason-error" className="error-message" role="alert" aria-live="polite">{errors.reason}</span>}
          </div>

          <div className="form-actions">
            <button type="submit" className="button submit-button">
              Confirm Appointment
            </button>
            <Link to={`/doctors/${id}`} className="button button-secondary cancel-button">
              Cancel
            </Link>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Booking
