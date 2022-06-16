import  './index.scss'
import React, { useEffect, useState } from 'react'
// import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
function Home() {

    const [letterClass,setletterClass]=useState('text-animate')
    const nameArray=[' ','M','a','a','z']
    const jobArray=['F','u','l','l',' ','S','t','a','c','k',' ','w','e','b',' ','d','e','v','e','l','o','p','e','r']

    useEffect(() => {
        return ()=>{
            setTimeout(() => {
                setletterClass('text-animate-hover')
              }, 4000)
        } 
      }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass} >H</span>
            <span className={`${letterClass} _12`} >i</span> 
            <br/>
            <span className={`${letterClass} _13`}  >I</span>
            <span className={`${letterClass} _14`}  >,m</span> 

            <AnimatedLetters
             letterClass={letterClass}
             strArray={nameArray}
             idx={15}
             />
            {/* <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            /> */}
            
            <br />
            <AnimatedLetters
             letterClass={letterClass}
             strArray={jobArray}
             idx={20}
             />
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