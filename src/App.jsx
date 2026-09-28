import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  )
}

export default App
