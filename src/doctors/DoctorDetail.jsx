import { useParams, Link } from 'react-router-dom'
import { doctors } from '../api/doctors'
import './DoctorDetail.css'

function DoctorDetail() {
  const { id } = useParams()
  const doctor = doctors.find(d => d.id === parseInt(id))

  if (!doctor) {
    return (
      <div className="doctor-detail">
        <p className="not-found">Doctor Not Found</p>
      </div>
    )
  }

  return (
    <div className="doctor-detail">
      <div className="doctor-detail-content">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="doctor-detail-image"
        />
        <div className="doctor-detail-info">
          <h1 className="doctor-detail-name">{doctor.name}</h1>
          <p className="doctor-detail-department">{doctor.department}</p>
          <p className="doctor-detail-specialty">{doctor.specialty}</p>
          <p className="doctor-detail-experience">{doctor.experience}</p>

          <div className="available-times">
            <h3 className="times-heading">Available Times</h3>
            <ul className="times-list">
              {doctor.availableTimes.map((time, index) => (
                <li key={index} className="time-item">{time}</li>
              ))}
            </ul>
          </div>

          <Link to={`/doctors/${doctor.id}/book`} className="book-button">
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DoctorDetail
