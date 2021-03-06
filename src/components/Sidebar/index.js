import './index.scss'
import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn,faGithub,faInstagram ,faFacebook } from '@fortawesome/free-brands-svg-icons'
function Sidebar() {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to='/'  >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to='/about'  >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to='/contact'  >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/muhammad-maaz-a456ba1b8/"
                >
                    <FontAwesomeIcon icon={faLinkedinIn}  color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/mmaazjavaid"
                >
                    <FontAwesomeIcon icon={faGithub}  color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/m_maaz_javaid/"
                >
                    <FontAwesomeIcon icon={faInstagram}  color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/profile.php?id=100004667566440"
                >
                    <FontAwesomeIcon icon={faFacebook}  color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar