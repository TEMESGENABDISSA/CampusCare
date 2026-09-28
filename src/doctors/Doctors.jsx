import { doctors } from '../api/doctors'
import DoctorList from './DoctorList'
import './Doctors.css'

function Doctors() {
  return (
    <div className="doctors-page">
      <h1 className="doctors-heading">Find a Doctor</h1>
      <DoctorList doctors={doctors} />
    </div>
  )
}

export default Doctors
