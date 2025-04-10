import React from 'react'
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";
import '../scss/choose.scss'

const Choose = () => {
  return (
    <>
        <section className="choose-section">
            <div className="main-container">
                <div className="left">
                    <h1>Why Choose Us</h1>
                    <h2>Best valued deals you will ever find</h2>
                    <p>
                        Discover the best deals you'll ever find with our unbeatable
                        offers. We're dedicated to providing you with the best value
                        for your money, so you can enjoy top-quality services and
                        products without breaking the bank. Our deals are designed to
                        give you the ultimate renting experience, so don't miss out on
                        your chance to save big.
                    </p>
                    <a href="#home">
                        Find Details &nbsp;
                        <i className="fa-solid fa-angle-right"></i>
                    </a>
                </div>
                <div className="right">
                    <div className="text-container">
                     <img src={Box1} alt="car-img" />
                        <div id='text-container-inside' >
                            <h4>Cross Country Drive</h4>
                            <p>
                                Take your driving experience to the next level with our
                                top-notch vehicles for your cross-country adventures.
                            </p>
                        </div>
                     </div>
                     <div className="text-container">
                     <img src={Box2} alt="car-img" />
                        <div id='text-container-inside'>
                            <h4>All Inclusive Pricing</h4>
                            <p>
                                Get everything you need in one convenient, transparent
                                 price with our all-inclusive pricing policy.
                            </p>
                        </div>
                     </div>
                     <div className="text-container">
                     <img src={Box3} alt="car-img" />
                        <div id='text-container-inside'>
                            <h4>No Hidden Charges</h4>
                            <p>
                                Enjoy peace of mind with our no hidden charges policy. We
                                believe in transparent and honest pricing.
                            </p>
                        </div>
                     </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Choose