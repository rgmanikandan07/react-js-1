import React from 'react'
import "./css/Leftside.css"

function LeftSide() {
  return (
    <div className="left-list">
         <li><i class="bi bi-person-circle"></i>Freinds</li>
         <li><i class="bi bi-save-fill"></i>Saved</li>
         <li><i class="bi bi-people-fill"></i>Groups</li>
         <li><i class="bi bi-shop"></i>Marketplace</li>
         <li><i class="bi bi-play-btn"></i>Watch</li>
         <li><i class="bi bi-clock-history"></i>Memories</li>
         <li><i class="bi bi-flag"></i>Pages</li>
         <li><i class="bi bi-calendar2-event"></i>Events</li>
    </div>
  )
}

export default LeftSide;