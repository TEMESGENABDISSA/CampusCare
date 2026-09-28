import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Doctors from './doctors/Doctors'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
      </Routes>
    </Layout>
  )
}

export default App
