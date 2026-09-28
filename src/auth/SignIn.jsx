import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from './AuthContext'
import './SignIn.css'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    signIn(email, password)
    navigate('/doctors')
  }

  return (
    <div className="signin">
      <div className="signin-card">
        <h1 className="signin-heading">Sign In</h1>
        <p className="signin-subtitle">CampusCare Student Portal</p>

        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="signin-button">
            Sign In
          </button>
        </form>

        <p className="signin-note">
          Demo: Enter any email and password to sign in
        </p>

        <Link to="/" className="home-link">
          Return to Home
        </Link>
      </div>
    </div>
  )
}

export default SignIn
