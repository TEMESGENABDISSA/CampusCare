import './DepartmentFilter.css'

function DepartmentFilter({ selectedDepartment, onDepartmentChange }) {
  const departments = [
    'All Departments',
    'Cardiology',
    'Dentistry',
    'Pediatrics',
    'General Medicine',
    'Neurology' // Temporary: for testing empty state (no doctors in this department)
  ]

  return (
    <div className="department-filter">
      {departments.map((department) => (
        <button
          key={department}
          className={`filter-button ${selectedDepartment === department ? 'active' : ''}`}
          onClick={() => onDepartmentChange(department)}
        >
          {department}
        </button>
      ))}
    </div>
  )
}

export default DepartmentFilter
