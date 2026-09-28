import { createContext, useContext, useState } from 'react'

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

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment])
  }

  return (
    <AppointmentContext.Provider value={{ appointments, addAppointment }}>
      {children}
    </AppointmentContext.Provider>
  )
}
