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
        <div className="doctors-list">
          {[1, 2, 3].map((i) => (
            <div key={i} className="doctor-card skeleton-card">
              <div className="doctor-image-container">
                <div className="skeleton skeleton-image"></div>
              </div>
              <div className="doctor-info">
                <div className="skeleton skeleton-text medium"></div>
                <div className="skeleton skeleton-text short"></div>
                <div className="skeleton skeleton-text long"></div>
                <div className="skeleton skeleton-text short"></div>
                <div className="skeleton skeleton-button"></div>
              </div>
            </div>
          ))}
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
          <div className="error-icon" aria-hidden="true">⚠️</div>
          <h3 className="error-title">Unable to load doctors</h3>
          <p className="error-description">Please try again later.</p>
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
            className="button button-secondary clear-filter-button"
            onClick={handleClearFilter}
          >
            Clear Filter
          </button>
        )}
      </div>

      {filteredDoctors.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon" aria-hidden="true">🔍</div>
          <h3 className="empty-title">No doctors found</h3>
          <p className="empty-description">
            No doctors are available in the {selectedDepartment} department.
            Try selecting another department.
          </p>
          <button 
            className="button empty-action-button"
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
