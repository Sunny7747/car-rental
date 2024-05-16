import React, { useState } from 'react'

const BookSec = () => {
// UseState define
    const [carsData, setCarsData] = useState("");
    const [pickUp, setPickUp ] = useState("");
    const [dropOff, setDropOff] = useState("")
    const [dropTime, setDropTime] = useState("")

// function for every input
function handelCarDataChange(e){
    setCarsData(e.target.value)
}

function handlePickUp(e){
    setPickUp(e.target.value)
}

function handleDrop(e){
    setDropOff(e.target.value)
}

function handelDropTime(e){
    setDropTime(e.target.value)
}


  return (
    <div>
        <section className="book-sec">
        

        <div className="hide-unhide">

        </div>
        <div className="booking-heading">
            Book a car
        </div>
            <form className='form-sec'>
            <div className="booking-items">
                <label><i class="fa-solid fa-car"></i> Select Your CarType <b>*</b></label>
                <select value={carsData} onChange={handelCarDataChange} className="booking-input-style">
                 <option>Select your car type</option>
                    <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                    <option value="VW Golf 6">VW Golf 6</option>
                    <option value="Toyota Camry">Toyota Camry</option>
                    <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
                    <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                    <option value="VW Passat CC">VW Passat CC</option>
                  </select>
            </div>
            <div className="booking-items">
                <label>
                <i class="fa-solid fa-location-dot"></i> Pick-Up <b>*</b>
                </label>
                <select value={pickUp} onChange={handlePickUp} className="booking-input-style">
                    <option>Select pick up location</option>
                    <option>Belgrade</option>
                    <option>Novi Sad</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
                  </select>
            </div>
            <div className="booking-items">
                <label>
                <i class="fa-solid fa-location-dot"></i> Drop-of <b>*</b>
                </label>
                <select value={dropOff} onChange={handleDrop} className="booking-input-style">
                    <option>Select drop off location</option>
                    <option>Novi Sad</option>
                    <option>Belgrade</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
                </select>
            </div>
            <div className="booking-items">
                <label htmlFor='picktime'>
                <i class="fa-solid fa-calendar-days"></i> Pick-up <b>*</b>
                </label>
                <input
                    id="picktime"
                    value={pickUp}
                    onChange={handlePickUp}
                    type="date"
                    className='booking-input-style'
                ></input>
            </div>
            <div className="booking-items">
                  <label htmlFor="droptime">
                  <i class="fa-solid fa-calendar-days"></i>
                    Drop-of <b>*</b>
                  </label>
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={handelDropTime}
                    type="date"
                    className='booking-input-style'
                  ></input>
                </div>
                <button className='booking-btn' type="submit">
                  Search
                </button>
            </form>
        </section>
    </div>
  )
}

export default BookSec