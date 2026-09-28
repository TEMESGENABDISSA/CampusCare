import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Doctors from './doctors/Doctors'
import DoctorDetail from './doctors/DoctorDetail'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<DoctorDetail />} />
      </Routes>
    </Layout>
  )
}

export default App
