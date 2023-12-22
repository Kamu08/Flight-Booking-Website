import { useEffect } from "react"
import supportimg from "../../assets/supporting.png"
import Aos from 'aos'
import 'aos/dist/aos.css'


function Support() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className="support container section">
      <div className="sectionContainer">

        <div className="titlesDiv">
          <small>Travel Support</small>
          <h2>Find help with Booking</h2>
          <p>Navigating the booking process can be complex. Our dedicated support team is here to assist you at every step, ensuring a smooth and stress-free booking experience. </p>
        </div>

        <div className="infoDiv grid">
          <div className="textDiv grid">

            <div data-aos='fade-down' data-aos-duration='2500' className="singleInfo">
              <span className="number">01</span>
              <h4>Travel requirments for USA</h4>
              <p>Understanding and meeting the travel requirements for the USA is crucial for a smooth journey. Ensure a hassle-free entry by staying informed about visa and documentation necessities. </p>
            </div>

            <div data-aos='fade-down' data-aos-duration='3500' className="singleInfo">
              <span className="number colorOne">02</span>
              <h4>Travel Insurance</h4>
              <p>Prioritize your safety with comprehensive travel insurance coverage. Secure your trip against unforeseen events and travel with confidence. </p>
            </div>

            <div data-aos='fade-down' data-aos-duration='4500' className="singleInfo">
              <span className="number colorTwo">03</span>
              <h4>Services at your arrival</h4>
              <p>Arrive with ease and comfort. Experience seamless services upon arrival, ensuring a warm welcome and a stress-free start to your journey</p>
            </div>

          </div>

          <div className="imgDiv">
            <img data-aos='fade-left' data-aos-duration='4500' src={supportimg} alt="" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Support
