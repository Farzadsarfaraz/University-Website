import React from 'react'
import './Campus.css'
const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src="https://thumbs.dreamstime.com/b/exterior-view-doheny-memorial-library-usc-los-angeles-mar-exterior-view-doheny-memorial-library-usc-mar-112835349.jpg" alt=""/>
            <img src="https://images.alphacoders.com/932/thumb-1920-932313.jpg" alt=""/>
            <img src="https://thumbs.dreamstime.com/b/famous-architecture-cambridge-university-24498708.jpg" alt=""/>
            <img src="https://www.sydney.edu.au/content/dam/corporate/images/campus-life/events/_YD_8486.jpg" alt=""/>
        </div>
        <button className='btn dark-btn'> See more here <i className='bx bx-desktop ' ></i></button>
    </div>
  )
}

export default Campus