import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <h1 className="home-title">CampusCare</h1>
      <h2 className="home-subtitle">Student Clinic Appointment System</h2>
      <p className="home-description">
        Find doctors and book clinic appointments easily. CampusCare helps students
        connect with campus health services for their medical needs.
      </p>
      <Link to="/doctors" className="home-button">
        Find a Doctor
      </Link>
    </div>
  )
}

export default Home
