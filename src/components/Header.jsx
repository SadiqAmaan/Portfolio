import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
const Header = () => {
  return (
    <nav>
      <NavContent/>
      <button className='navBtn'>
        <AiOutlineMenu/>
      </button>
    </nav>
  )
}


const NavContent = ()=>(
  <>
  <h2>Sadiq.</h2>
  <div>
    <a href="#home">Home</a>
    <a href="#work">Work</a>
    <a href="#experience">Experience</a>
    <a href="#services">Services</a>

    <a href="#contact">Contact</a>
  </div>

  <a href="mailto:amaankhan1666@gmail.com"><button>Email</button></a>
  
  </>
)

export default Header
