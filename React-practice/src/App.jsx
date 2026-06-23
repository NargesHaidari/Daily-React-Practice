
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import HomePage from './components/HomePage'
import ProductDtail from './components/ProductDtail'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/productDtail/:id" element={<ProductDtail/>} />
        <Route/>
      </Routes>
    </Router>
  )
}


