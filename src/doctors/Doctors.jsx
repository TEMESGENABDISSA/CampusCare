import { useState, useEffect } from 'react'
import { doctors } from '../api/doctors'
import DoctorList from './DoctorList'
import DepartmentFilter from './DepartmentFilter'
import './Doctors.css'

function Doctors() {
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // Simulate loading - remove this useEffect when implementing real API
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

  const handleClearFilter = () => {
    setSelectedDepartment('All Departments')
  }

  if (loading) {
    return (
      <div className="doctors-page">
        <div className="doctors-header">
          <h1 className="doctors-heading">Find the Right Doctor</h1>
          <p className="doctors-subtitle">
            Browse our campus clinic specialists and choose a doctor who fits your needs.
          </p>
        </div>
        <div className="state-message loading-state">
          <div className="loading-spinner"></div>
          <p>Loading doctors...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="doctors-page">
        <div className="doctors-header">
          <h1 className="doctors-heading">Find the Right Doctor</h1>
          <p className="doctors-subtitle">
            Browse our campus clinic specialists and choose a doctor who fits your needs.
          </p>
        </div>
        <div className="state-message error-state">
          <div className="error-icon">⚠️</div>
          <p>Unable to load doctors. Please try again later.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="doctors-page">
      <div className="doctors-header">
        <h1 className="doctors-heading">Find the Right Doctor</h1>
        <p className="doctors-subtitle">
          Browse our campus clinic specialists and choose a doctor who fits your needs.
        </p>
      </div>

      <div className="doctors-filter-section">
        <DepartmentFilter
          selectedDepartment={selectedDepartment}
          onDepartmentChange={setSelectedDepartment}
        />
        {selectedDepartment !== 'All Departments' && (
          <button 
            className="clear-filter-button"
            onClick={handleClearFilter}
          >
            Clear Filter
          </button>
        )}
      </div>

      {filteredDoctors.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🔍</div>
          <h3 className="empty-title">No Doctors Found</h3>
          <p className="empty-description">
            No doctors are available in the {selectedDepartment} department.
            Try selecting a different department or clear the filter.
          </p>
          <button 
            className="empty-action-button"
            onClick={handleClearFilter}
          >
            Clear Filter
          </button>
        </div>
      ) : (
        <>
          <div className="results-indicator">
            {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''} available
          </div>
          <DoctorList doctors={filteredDoctors} />
        </>
      )}
    </div>
  )
}

export default Doctors
