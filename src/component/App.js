import React from 'react'
import {BrowserRouter, Route,Routes} from "react-router-dom"
import Nav from "./Nav"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Models from "./pages/Models"
import Teams from "./pages/Teams"
import Testimonials from "./pages/Testimonials"


const App = () => {
  return (
    <BrowserRouter>
    <Nav />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/models' element={<Models />}/>
          <Route path='/teams' element={<Teams />}/>
          <Route path='/testimonials' element={<Testimonials />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App