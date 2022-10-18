import React from 'react'
import "./css/Header.css"

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm-KkfQdd-MMCVLJDXDaChYjg6DokJE6-1UbWLexz1&s" alt="pic" />

        <div className="header__search">
          <input type="text" placeholder="Search Facebook" />
        </div>
        <div className="header_mid_icon">
          <li><i class="bi bi-house-door-fill"></i></li>
          <li><i class="bi bi-play-btn"></i></li>
          <li><i class="bi bi-shop"></i></li>
          <li><i class="bi bi-people-fill"></i></li>
          <li><i class="bi bi-controller"></i></li>
        </div>
      </div>
      

      {/* <div className="header__middle"></div> */}
      

      <div className="header__right">
        <li><i class="bi bi-chat-fill"></i></li>
        <li><i class="bi bi-bell-fill"></i></li>
        <li><i class="bi bi-person-fill"></i></li>
        <li><i class="bi bi-list"></i></li>
      </div>
    </div>
  )
}

export default Header