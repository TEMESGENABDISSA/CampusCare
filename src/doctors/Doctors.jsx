import { useState } from 'react'
import { doctors } from '../api/doctors'
import DoctorList from './DoctorList'
import DepartmentFilter from './DepartmentFilter'
import './Doctors.css'

function Doctors() {
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments')

  const filteredDoctors = selectedDepartment === 'All Departments'
    ? doctors
    : doctors.filter(doctor => doctor.department === selectedDepartment)

  return (
    <div className="doctors-page">
      <h1 className="doctors-heading">Find a Doctor</h1>
      <DepartmentFilter
        selectedDepartment={selectedDepartment}
        onDepartmentChange={setSelectedDepartment}
      />
      <DoctorList doctors={filteredDoctors} />
    </div>
  )
}

export default Doctors
