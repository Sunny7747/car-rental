import {useState} from 'react'
import data from "../component/CarData"
import '../scss/carDetailSec.scss'

const CarDetailsSec = () => {

    const [btnNo, setBtnNo] = useState(1);

   function handelChange(e){
    setBtnNo(e.target.name)
   }
//    alert(btnNo)
    // console.log(btnNo)
  return (
    <>
        <section className='car-details-sec'>
            <div className="main">
                <div className="titles">
                    <h2>Vehicle Models</h2>
                    <h1>Our rental fleet</h1>
                    <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
                </div>
                <div className="functional-items">
                    <div className="all-btns">
                        <button name='0' onClick={handelChange}>Audi A1 S-Line</button>
                        <button name='2' onClick={handelChange}>VW Golf 6</button>
                        <button name='1' onClick={handelChange}>Toyota Camry</button>
                        <button name='3' onClick={handelChange}>BMW 320 ModernLine</button>
                        <button name='4' onClick={handelChange}>Mercedes-Benz GLK</button>
                        <button name='5' onClick={handelChange}>VW Passat CC</button>
                    </div>

                    
                    {data[btnNo].map((items)=>(
                    <div className="car-and-carData-sec">
                        <div className="car-img">
                            <img src={items.img} alt="car-img" />
                        </div>
                        <div className="data-tabel">
                            <div className="price-sec">
                                <span className='changing-price-span'>${items.price}</span> /  rent per day
                            </div>
                            <div className="car-info-changing-dynamicaly">
                                <div className="pick-description">
                                    <span>Model</span>
                                    <span>{items.model}</span>
                                </div>

                                <div className="pick-description">
                                    <span>Mark</span>
                                    <span>{items.mark}</span>
                                </div>

                                <div className="pick-description">
                                    <span>Year</span>
                                    <span>{items.year}</span>
                                </div>

                                <div className="pick-description">
                                    <span>Doors</span>
                                    <span>{items.doors}</span>
                                </div>

                                <div className="pick-description">
                                    <span>AC</span>
                                    <span>{items.air}</span>
                                 </div>

                                <div className="pick-description">
                                    <span>Transmission</span>
                                    <span>{items.transmission}</span>
                                </div>

                                <div className="pick-description">
                                    <span>Fuel</span>
                                    <span>{items.fuel}</span>
                                </div>
                            </div>
                                <a className="cta-btn" href="#booking-section">Reserve Now</a>
                        </div>
                    </div>
                         ))}
                   
                </div>
            </div>
        </section>
    </>
  )
}

export default CarDetailsSec