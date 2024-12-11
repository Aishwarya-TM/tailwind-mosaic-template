import React from 'react'
import HomepageComponents from './components/HomepageComponents'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CustomersComponents from './components/CustomersComponents'

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomepageComponents />} />
      <Route path="/customers" element={<CustomersComponents />} />
    </Routes>
  </Router>
  
  )
}

export default App