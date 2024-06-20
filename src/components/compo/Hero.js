import React from 'react'
import { Icon, LogoCircle, Read, Section } from '../styled/Section.styled'

function Hero() {
  return (
    <Section>
      <div className=' divider left'>
        <div className=' text'>
          <div className=' top'>
            <p>
              Download our <span><i className="fa-solid fa-bolt-lightning"></i></span> app
            </p>
            <div className=' icons'>
              <Icon>
                <i className="fa-brands fa-apple"></i>
              </Icon>
              <Icon>
                <i className="fa-brands fa-google-play"></i>
              </Icon>
              <Icon dark>
              <i className="fa-solid fa-arrow-down"></i>
              </Icon>
            </div>
          </div>
          <div className=' middle'>
            <Read>
              <p>Read more</p>
              <span></span>
            </Read>
            <h1>
              <div>
                Start <i className="fa-solid fa-bolt-lightning"></i>
              </div>
              free trial
            </h1>
            <p>Train with the most <br></br> experieced staff</p>
          </div>
          <button>
            <p>START</p>
            <i className="fa-solid fa-angles-right"></i>
          </button>
        </div>
      </div>
      <div className=' divider right'>
        <div className=' text'>
          <h1>Blaze to victory</h1>
          <div className='image'>
            <div>
              <p>leaderscommunity.com</p>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </div>
          <p className=' para'><span>Sport science</span> based personalized workouts for athletes</p>
          <Read darkBorder>
            <p>Read more</p>
            <span></span>
          </Read>
        </div>
        <div className=' icons'>
          <Read darkBorder>
            <p>Subscribe</p>
            <i className="fa-solid fa-arrow-down"></i>
          </Read>
          <div className=' part'>
            <p>Partners:</p>
            <div className=' circle'>
              <LogoCircle bg='#eaff93'>
                <i className="fa-solid fa-frog"></i>
              </LogoCircle>
              <LogoCircle bg='#b8fecc'>
                <i className="fa-solid fa-frog"></i>
              </LogoCircle>
              <LogoCircle bg="#e9e6ff">
                <i className="fa-solid fa-frog"></i>
              </LogoCircle>
            </div>
            <button className=' plus'>+</button>
          </div>
          <div className=' bottom'>
            <p>Scroll</p>
            <i className="fa-solid fa-arrow-down"></i>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Hero