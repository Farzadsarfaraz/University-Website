import React from 'react'
import './Campus.css'
const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src="https://www.sydney.edu.au/content/dam/corporate/images/campus-life/events/_YD_8486.jpg" alt=""/>
            <img src="https://www.sydney.edu.au/content/dam/corporate/images/campus-life/events/_YD_8486.jpg" alt=""/>
            <img src="https://www.sydney.edu.au/content/dam/corporate/images/campus-life/events/_YD_8486.jpg" alt=""/>
            <img src="https://www.sydney.edu.au/content/dam/corporate/images/campus-life/events/_YD_8486.jpg" alt=""/>
        </div>
        <button className='btn dark-btn'> See more here <i class='bx bx-desktop ' ></i></button>
    </div>
  )
}

export default Campus