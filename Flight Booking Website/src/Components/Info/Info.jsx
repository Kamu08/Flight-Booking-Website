import { RxCalendar } from 'react-icons/rx'
import { BsShieldCheck } from 'react-icons/bs'
import { BsFillBookmarkFill } from 'react-icons/bs'

const Info = () => {
  return (
    <div className='info section'>
      <div className="infoContainer container">
        <div className="titleDiv flex">
          <h2>Make memories of the World</h2>
          <button className='btn'>View All</button>
        </div>
        <div className="cardsDiv grid">
          <div className="singleCard grid">
            <div className="iconDiv flex">
              <RxCalendar className='icon' />
            </div>
            <span className="cardTitle">Book Now</span>
            <p>Embark on your journey with ease.</p>
          </div>

          <div className="singleCard grid">
            <div className="iconDiv flex colorOne">
              <BsShieldCheck className='icon' />
            </div>
            <span className="cardTitle">Safety</span>
            <p>Your well-being is our top priority.</p>
          </div>

          <div className="singleCard grid">
            <div className="iconDiv flex colorTwo">
              <BsFillBookmarkFill className='icon' />
            </div>
            <span className="cardTitle">Save More</span>
            <p>Experience affordability without compromise.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
