import React from 'react'
import SameTitle from '../aboutSec/SameTitle'
import Footer from '../Footer'
import '../../scss/contact.scss'
const Contact = () => {
  return (
    <div>
      <SameTitle 
        currentTile="/ Contact"
        title="Contact"
      />
      <div className='contact-div'>
        <div className="additional-info">
          <h1>Need additional information?</h1>
          <p>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
        </div>
        <div className="sec-contact-div">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Joe Shmoe"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

                <button type="submit">
                  {/* <IconMailOpened /> */}
                  &nbsp; Send Message
                </button>
              </form>
            </div>
      </div>
    <Footer />
    </div>
  )
}

export default Contact