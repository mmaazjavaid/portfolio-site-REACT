import  './index.scss'
import React from 'react'
// import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>Hi i am Maaz
            {/* <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            /> */}
            
            <br />
            Full Stack web developer
          </h1>
          <h2>Web Developer / Laravel Expert / React Expert</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home