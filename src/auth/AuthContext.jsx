import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('campuscare_user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const signIn = (email, password) => {
    // Simple demo authentication - accepts any email/password
    // In a real app, this would call an API
    const demoUser = {
      id: 1,
      email: email,
      name: email.split('@')[0], // Use email username as name
      role: 'student'
    }
    
    setUser(demoUser)
    localStorage.setItem('campuscare_user', JSON.stringify(demoUser))
    return demoUser
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem('campuscare_user')
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
