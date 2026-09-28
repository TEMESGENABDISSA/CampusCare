import { useParams, Link } from 'react-router-dom'
import { doctors } from '../api/doctors'
import './DoctorDetail.css'

function DoctorDetail() {
  const { id } = useParams()
  const doctor = doctors.find(d => d.id === parseInt(id))

  if (!doctor) {
    return (
      <div className="doctor-detail">
        <div className="not-found-container">
          <div className="not-found-icon" aria-hidden="true">👨‍⚕️</div>
          <h1 className="not-found-title">Doctor not found</h1>
          <p className="not-found-description">
            The doctor you're looking for could not be found.
          </p>
          <Link to="/doctors" className="button not-found-button">
            Browse All Doctors
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="doctor-detail">
      <div className="doctor-detail-container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-image-section">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="profile-image"
            />
            <div className="availability-status">
              <span className="status-dot" aria-hidden="true"></span>
              Available
            </div>
          </div>
          
          <div className="profile-info-section">
            <h1 className="profile-name">{doctor.name}</h1>
            <p className="profile-department">{doctor.department}</p>
            <p className="profile-specialty">{doctor.specialty}</p>
            <p className="profile-experience">{doctor.experience}</p>
            
            <div className="profile-description">
              <p>
                Experienced {doctor.specialty} specialist with {doctor.experience} of practice 
                in the {doctor.department} department. Dedicated to providing quality healthcare 
                to university students.
              </p>
            </div>
          </div>
        </div>

        {/* Appointment Times */}
        <div className="appointment-section">
          <h2 className="section-title">Available Appointment Times</h2>
          <div className="times-grid">
            {doctor.availableTimes.map((time, index) => (
              <Link
                key={index}
                to={`/doctors/${doctor.id}/book`}
                className="time-card"
                state={{ selectedTime: time }}
                aria-label={`Book appointment for ${time}`}
              >
                <div className="time-icon" aria-hidden="true">📅</div>
                <span className="time-text">{time}</span>
              </Link>
            ))}
          </div>
          
          <Link to={`/doctors/${doctor.id}/book`} className="button book-appointment-button">
            Book Appointment
          </Link>
        </div>

        {/* Why Choose Section */}
        <div className="why-choose-section">
          <h2 className="section-title">Why Choose This Doctor</h2>
          <div className="why-choose-grid">
            <div className="why-choose-item">
              <div className="why-icon" aria-hidden="true">🎓</div>
              <h3 className="why-title">Specialized Expertise</h3>
              <p className="why-description">
                {doctor.specialty} specialist with focused knowledge in {doctor.department}.
              </p>
            </div>
            <div className="why-choose-item">
              <div className="why-icon" aria-hidden="true">⏱️</div>
              <h3 className="why-title">Experienced Professional</h3>
              <p className="why-description">
                {doctor.experience} of clinical experience treating patients.
              </p>
            </div>
            <div className="why-choose-item">
              <div className="why-icon" aria-hidden="true">🏫</div>
              <h3 className="why-title">Campus Healthcare</h3>
              <p className="why-description">
                Part of the university health services team, dedicated to student wellness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorDetail
