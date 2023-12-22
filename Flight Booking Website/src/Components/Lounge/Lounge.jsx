import imageGrid from '../../assets/imageGrid.png'

const Lounge = () => {
  return (
    <div className="lounge container flex">
      <div className="sectionContainer grid">
        <div className="imgDiv">
          <img src={imageGrid} alt="" />
        </div>

        <div className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>
          <div className="grids grid">

            <div className="singleGrid">
              <span className="gridTitle">
                Help through the airport
              </span>
              <p>Assistance throughout the airport for minors traveling alone.</p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">
                Priority Boarding
              </span>
              <p>Enjoy early boarding privileges for a seamless travel experience.</p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">
                Chauffeur-drive service
              </span>
              <p>Relax with our chauffeur-driven service for convenient airport transfers.</p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">
                Care on Flight
              </span>
              <p>Experience personalized care and attention during your journey.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lounge
