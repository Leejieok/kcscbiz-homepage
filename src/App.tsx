import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import './App.css'

// Lazy load pages for code splitting
const About = lazy(() => import('./pages/About'))
const ServiceMain = lazy(() => import('./pages/services/ServiceMain'))
const Service1 = lazy(() => import('./pages/services/Service1'))
const Service2 = lazy(() => import('./pages/services/Service2'))
const Service3 = lazy(() => import('./pages/services/Service3'))
const Cases = lazy(() => import('./pages/Cases'))
const Location = lazy(() => import('./pages/Location'))
const LocationWrite = lazy(() => import('./pages/LocationWrite'))
const Contact = lazy(() => import('./pages/Contact'))
const Request = lazy(() => import('./pages/Request'))
const Reviews = lazy(() => import('./pages/Reviews'))
const Careers = lazy(() => import('./pages/Careers'))

// Loading component
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={
            <Suspense fallback={<PageLoader />}>
              <About />
            </Suspense>
          } />

          {/* 서비스소개 - 중첩 라우팅 */}
          <Route path="service">
            <Route index element={
              <Suspense fallback={<PageLoader />}>
                <ServiceMain />
              </Suspense>
            } />
            <Route path="policy-funds" element={
              <Suspense fallback={<PageLoader />}>
                <ServiceMain />
              </Suspense>
            } />
            <Route path="tax-refund" element={
              <Suspense fallback={<PageLoader />}>
                <Service1 />
              </Suspense>
            } />
            <Route path="corporate-business" element={
              <Suspense fallback={<PageLoader />}>
                <Service2 />
              </Suspense>
            } />
            <Route path="certification" element={
              <Suspense fallback={<PageLoader />}>
                <Service3 />
              </Suspense>
            } />
          </Route>

          <Route path="cases" element={
            <Suspense fallback={<PageLoader />}>
              <Cases />
            </Suspense>
          } />
          <Route path="location" element={
            <Suspense fallback={<PageLoader />}>
              <Location />
            </Suspense>
          } />
          <Route path="location/write" element={
            <Suspense fallback={<PageLoader />}>
              <LocationWrite />
            </Suspense>
          } />
          <Route path="reviews" element={
            <Suspense fallback={<PageLoader />}>
              <Reviews />
            </Suspense>
          } />
          <Route path="contact" element={
            <Suspense fallback={<PageLoader />}>
              <Contact />
            </Suspense>
          } />
          <Route path="request" element={
            <Suspense fallback={<PageLoader />}>
              <Request />
            </Suspense>
          } />
          <Route path="careers" element={
            <Suspense fallback={<PageLoader />}>
              <Careers />
            </Suspense>
          } />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
