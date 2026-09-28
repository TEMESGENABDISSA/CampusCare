import { Link } from 'react-router-dom'
import './DoctorCard.css'

function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card">
      <div className="doctor-image-container">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="doctor-image"
        />
        <div className="availability-badge">
          <span className="availability-dot" aria-hidden="true"></span>
          Available
        </div>
      </div>
      
      <div className="doctor-info">
        <h3 className="doctor-name">Dr. {doctor.name}</h3>
        <p className="doctor-department">{doctor.department}</p>
        <p className="doctor-specialty">{doctor.specialty}</p>
        <p className="doctor-experience">{doctor.experience}</p>
        
        <Link 
          to={`/doctors/${doctor.id}`} 
          className="view-profile-button"
        >
          View Profile
        </Link>
      </div>
    </div>
  )
}

export default DoctorCard
