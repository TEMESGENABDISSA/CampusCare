import { useState, useEffect } from 'react'
import { doctors } from '../api/doctors'
import DoctorList from './DoctorList'
import DepartmentFilter from './DepartmentFilter'
import './Doctors.css'

function Doctors() {
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // Simulate loading - remove this when implementing real API
  // To test error state, change setError(true) below
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      // setError(true) // Uncomment to test error state
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const filteredDoctors = selectedDepartment === 'All Departments'
    ? doctors
    : doctors.filter(doctor => doctor.department === selectedDepartment)

  // To test empty state, click "Neurology" in the filter (no doctors in this department)
  // Remove "Neurology" from DepartmentFilter.jsx when done testing

  if (loading) {
    return (
      <div className="doctors-page">
        <h1 className="doctors-heading">Find a Doctor</h1>
        <p className="state-message">Loading doctors...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="doctors-page">
        <h1 className="doctors-heading">Find a Doctor</h1>
        <p className="state-message">Unable to load doctors.</p>
      </div>
    )
  }

  if (filteredDoctors.length === 0) {
    return (
      <div className="doctors-page">
        <h1 className="doctors-heading">Find a Doctor</h1>
        <DepartmentFilter
          selectedDepartment={selectedDepartment}
          onDepartmentChange={setSelectedDepartment}
        />
        <p className="state-message">No doctors found.</p>
      </div>
    )
  }

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
