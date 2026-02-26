
import  './header.css'
import { Link } from 'react-router-dom'
import React , { useState } from 'react'

const Header = () => {
    const[menu, setMenu]= useState("home")
    const [isopen, setIsopen] = useState(false)
    const handleToggle = () => {
        setIsopen(!isopen)
    }
     const handleMenuClick = (menu) => {
        setMenu(menu);
        setIsopen(false); 
    }


  return (
    <div className='header'>
        <header>
            <nav>
                <div className="logo">
                    <h1>logo</h1>
                </div>
                <ul className={isopen ? "nav-links open" : "nav-links"}>
                    <li onClick={()=>setMenu("home")} className={menu==="home" ? "active" : ""}><Link to="/"> Home</Link></li>
                    <li onClick={()=>setMenu("about")} className={menu==="about" ? "active" : ""}><Link to="/about"> About</Link></li>
                    <li onClick={()=>setMenu("academics")} className={menu==="academics" ? "active" : ""}><Link to="/academics"> Academics</Link></li>
                    <li onClick={()=>setMenu("admission")} className={menu==="admission" ? "active" : ""}><Link to="/admission"> Admission</Link></li>
                    <li onClick={()=>setMenu("gallery")} className={menu==="gallery" ? "active" : ""}><Link to="/gallery"> Gallery</Link></li>
                    <li onClick={()=>setMenu("contact")} className={menu==="contact" ? "active" : ""}><Link to="/contact"> Contact</Link></li>
                </ul>
                <div className="toggle">
                <button onClick={handleToggle}> {isopen ? "Close" : "Menu"}</button>
            </div>
            </nav>
            
        </header>
      
    </div>
  )
}

export default Header
