import React from 'react'
import SameTitle from '../aboutSec/SameTitle'
import AboutCompany from '../aboutSec/AboutCompany'
import PlanTrip from "../PlanTrip"
import Footer from '../Footer'

const About = () => {
  return (
    <div className='about-div'>
      <SameTitle 
        currentTile="/ About"
        title="About"
      />
      <AboutCompany />
      <PlanTrip />
      <Footer />
    </div>
  )
}

export default About