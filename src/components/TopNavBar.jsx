import React from 'react'
import { Link } from 'react-router-dom'
import "./TopNavBar.css"


function TopNavBar() {
  return (
    <>
    <div className="social-link-wrapper">
      <Link to="/login">Hello</Link>
      <div className="social-media">
        <ul className="social-media-wrapper">
          <li><Link to="login"><i class="fa-brands fa-facebook-f"></i></Link></li>
          <li><Link><i class="fa-brands fa-twitter"></i></Link></li>
          <li><Link><i class="fa-brands fa-instagram"></i></Link></li>
          <li><Link><i class="fa-brands fa-whatsapp"></i></Link></li>
          <li><Link><i class="fa-brands fa-youtube"></i></Link></li>
        </ul>
      </div>
      {/* <div className="sign-register">
      </div> */}

    </div>
    </>

  )
}

export default TopNavBar
