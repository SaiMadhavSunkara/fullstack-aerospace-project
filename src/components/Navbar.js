import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';    
import { SidebarData } from './Sidebardata';
import './Navbar.css';
import { IconContext } from 'react-icons';  

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  // 🔥 GET USER
  const user = JSON.parse(localStorage.getItem("user"));

  // 🔥 LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        
        {/* Top Navbar */}
        <div className='navbar'>
          
          {/* Sidebar toggle */}
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>

          {/* Title */}
          <div className={`navbar-title ${sidebar ? "navbar-title-shift" : ""}`}>
              KR Aerospace
          </div>

          {/* Spacer */}
          <div className="navbar-spacer"></div>

          {/* 🔥 RIGHT SIDE (EMAIL + LOGOUT + LOGO) */}
          <div className="navbar-right">

            {user && (
              <>
                <span className="user-email">
                  {user.email}
                </span>

                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </>
            )}

            <Link to="/">
              <img 
                src="/kraero.png"
                alt="Logo"
                className="navbar-logo"
              />
            </Link>

          </div>
        </div>

        {/* Sidebar */}
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'> 
                <AiIcons.AiOutlineClose />   
              </Link>
            </li>

            {SidebarData.map((item, index) => (
              <li key={index} className={item.cName}> 
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>   
                </Link>
              </li>
            ))}

          </ul>
        </nav>

      </IconContext.Provider>
    </>
  )
}