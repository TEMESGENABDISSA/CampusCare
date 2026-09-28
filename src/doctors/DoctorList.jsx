import DoctorCard from './DoctorCard'
import './DoctorList.css'

function DoctorList({ doctors }) {
  return (
    <div className="doctor-list">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  )
}

export default DoctorList
