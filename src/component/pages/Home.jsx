import React from 'react'
import Hero from "../Hero"
import BookSec from '../BookSec'
import PlanTrip from "../PlanTrip"
import CarDetailsSec from '../CarDetailsSec'
import CarAdsSec from "../CarAdsSec"
import Choose from "../Choose"
import Review from '../Review'
import Footer from '../Footer'

const Home = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  };

  return (
    <div className='home'>
    <button className="back-to-top-button" onClick={scrollToTop}>^</button>
    <Hero />
    <BookSec />
    <PlanTrip />
    <CarDetailsSec />
    <CarAdsSec />
    <Choose />
    <Review />
    <Footer />
    </div>
  )
}

export default Home