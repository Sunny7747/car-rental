import React from 'react'
import RepeteCarCard from '../modelsComponent/RepeteCarCard'
import SameTitle from '../aboutSec/SameTitle'
import fetchCarData from "../modelsComponent/fetchCarData"
import Footer from '../Footer'

const Models = () => {
  return (
    <div className="main-model">
    <div className='model-main-div'>
    <SameTitle 
        currentTile="/ Models"
        title="Models"
      />
    </div>
    <div className='modelssss-div'>
      {fetchCarData.map((items,index)=>{
        return <RepeteCarCard 
            key={index}
            name={items.name}
            price={items.price}
            againName={items.againName}
            ratting={items.ratting}
            type={items.type}
            fuel={items.fuel}
        />
      })}
    </div>
        <Footer />
    </div>
  )
}

export default Models