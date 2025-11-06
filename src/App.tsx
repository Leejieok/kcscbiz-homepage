import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import ServiceMain from './pages/services/ServiceMain'
import Service1 from './pages/services/Service1'
import Service2 from './pages/services/Service2'
import Service3 from './pages/services/Service3'
import Cases from './pages/Cases'
import Location from './pages/Location'
import Contact from './pages/Contact'
import Reviews from './pages/Reviews'
import Careers from './pages/Careers'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          
          {/* 서비스소개 - 중첩 라우팅 */}
          <Route path="service">
            <Route index element={<ServiceMain />} />
            <Route path="policy-funds" element={<Service1 />} />
            <Route path="tax-refund" element={<Service2 />} />
            <Route path="corporate-business" element={<Service3 />} />
            <Route path="certification" element={<Service1 />} />
          </Route>
          
          <Route path="cases" element={<Cases />} />
          <Route path="location" element={<Location />} />
          <Route path="contact" element={<Contact />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="careers" element={<Careers />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
