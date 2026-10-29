import React from 'react'

const Hero = () => {
  return (
    <div className='hero-section'>
      <div className="hero-left-right-sections">
        <div className="hero-left">
        <div className="hero-left-big-text">
            <p>LET'S RIDE <br /> <span>THE FUTURE.</span></p>        
        </div>
        <div className="hero-left-line"></div>
        <div className="hero-left-small-text">
          <p>Simple and sleek design with users <br /> in mind.</p>
        </div>
        
          <div className="hero-left-right-btns">
            <div className="hero-left-buy-btn">
              <button><i className="fa-solid fa-arrow-right-long"></i></button>
              <p>Buy now</p>
            </div>
            <div className="hero-right-buy-btn">
              <p>Watch our <br /> video how <br /> it works</p>
              <img src="/hero-play-btn.png" alt="hero-play-btn" />
            </div>
            
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-right-img">
          <img src="/hero-img.png" alt="hero-img" />
        </div>
      </div>
      </div>
      
      
    </div>
  )
}

export default Hero
