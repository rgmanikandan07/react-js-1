import React from 'react'
import "./css/Rightside.css"

function Rightside() {
  return (
    <div class="right-flex">
        <div class="right-profile">
          <img src="https://wallpapercave.com/wp/wp6860301.jpg" alt="pic" />
          <h4>MS DHONI</h4>
        </div>

        <div class="right-end">
            <li><i class="bi bi-people-fill"></i>Friends</li>
            <li><i class="bi bi-question-square-fill"></i>Help&Support</li>
            <li><i class="bi bi-gear"></i>Setting&Privacy</li>
            <li><i class="bi bi-chat-heart-fill"></i>Resources</li>
            <li><i class="bi bi-box-arrow-right"></i>LOG OUT</li>
        </div>
    </div>
  )
}

export default Rightside