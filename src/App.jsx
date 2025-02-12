import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import OurMenu from './Pages/OurMenu'
import OurServices from './Pages/OurServices'
import AllergyAdvice from './Pages/AllergyAdvice'
import ProductDescription from './Pages/ProductDescription'
import Navigation from './NavBar/Navigation'

function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/allergyadvice' element={<AllergyAdvice />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/ourmenu' element={<OurMenu />} />
        <Route path='/ourservices' element={<OurServices />} />
        <Route path='/productDescription/:id' element={<ProductDescription />} />
      </Routes>

    </div>
  )
}

export default App