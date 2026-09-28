import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './Layout'
import Home from './Home'
import Doctors from './doctors/Doctors'
import DoctorDetail from './doctors/DoctorDetail'
import Booking from './booking/Booking'
import Confirmation from './booking/Confirmation'
import SignIn from './auth/SignIn'
import RequireAuth from './auth/RequireAuth'

const AppointmentHistory = lazy(() => import('./appointments/AppointmentHistory'))

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<DoctorDetail />} />
        <Route path="/doctors/:id/book" element={
          <RequireAuth>
            <Booking />
          </RequireAuth>
        } />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/appointments" element={
          <RequireAuth>
            <Suspense fallback={<div className="loading">Loading appointment history...</div>}>
              <AppointmentHistory />
            </Suspense>
          </RequireAuth>
        } />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Layout>
  )
}

export default App
