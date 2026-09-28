import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import './App.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={
          <div className="app">
            <h1 className="title">CampusCare</h1>
            <h2 className="subtitle">Student Clinic Appointment System</h2>
            <p className="description">
              Book appointments with campus health services easily and conveniently.
            </p>
          </div>
        } />
      </Routes>
    </Layout>
  )
}

export default App
