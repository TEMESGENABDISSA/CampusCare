import { createContext, useContext, useState, useEffect } from 'react'

const AppointmentContext = createContext()

export function useAppointments() {
  const context = useContext(AppointmentContext)
  if (!context) {
    throw new Error('useAppointments must be used within an AppointmentProvider')
  }
  return context
}

export function AppointmentProvider({ children }) {
  const [appointments, setAppointments] = useState([])

  // Load appointments from localStorage on mount
  useEffect(() => {
    const storedAppointments = localStorage.getItem('campuscare_appointments')
    if (storedAppointments) {
      setAppointments(JSON.parse(storedAppointments))
    }
  }, [])

  const addAppointment = (appointment) => {
    const updatedAppointments = [...appointments, appointment]
    setAppointments(updatedAppointments)
    localStorage.setItem('campuscare_appointments', JSON.stringify(updatedAppointments))
  }

  return (
    <AppointmentContext.Provider value={{ appointments, addAppointment }}>
      {children}
    </AppointmentContext.Provider>
  )
}
