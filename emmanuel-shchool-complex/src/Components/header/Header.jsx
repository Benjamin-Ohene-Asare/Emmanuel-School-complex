import React from 'react'
import  './header.css'

const Header = () => {
  return (
    <div className='header'>
        <header>
            <nav>
                <div className="logo">
                    <h1>logo</h1>
                </div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#"> About</a></li>
                    <li><a href="#">Academics</a></li>
                    <li><a href="#"> Admissions</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#"> Contact</a></li>
                </ul>
            </nav>
        </header>
      
    </div>
  )
}

export default Header
