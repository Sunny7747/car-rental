import React from "react"
import '../scss/footer.scss'

function Footer(props){

    const smooth = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // Smooth scrolling animation
        });
      };


    return <>
        <footer className="maiiin-containeeer">
            <div className="car-rental">
                <div className="top-item">
                    <h1>CAR<span>Rental</span></h1>
                    <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
                </div>
                <div className="bottom-items">
                    <div className="bottom-to-bottom">
                        <span class="material-symbols-outlined">call</span> <a href="/">(123) -456-789</a>
                    </div>
                    <div className="bottom-to-bottom">
                        <span class="material-symbols-outlined">email</span> <a href="/">carrental@gmail.com</a>
                    </div>
                </div>
            </div>
            <div className="company">
                <h1>COMPANY</h1>
                <a onClick={smooth} href="/">New York</a>
                <a onClick={smooth} href="/">Careers</a>
                <a onClick={smooth} href="/">Mobile</a>
                <a onClick={smooth} href="/">Blog</a>
                <a onClick={smooth} href="/">How we work</a>
            </div>
            <div className="working">
            <h1>WOKRING HOUR</h1>
                <p>Mon - Fri: 9:00AM - 9:00PM</p>
                <p>Sat: 9:00AM - 19:00PM</p>
                <p>Sun: Closed</p>
            </div>
            <div className="subs">
                <h1>SUBSCRIPTION</h1>
                <p>Subscribe your Email address for latest news & updates.</p>
                <input type="email" placeholder="Enter Email Address"/>
                <button>Submit</button>
            </div>
        </footer>
    </>
}

export default Footer