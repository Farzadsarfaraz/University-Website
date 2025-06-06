import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from './../../assets/uni.mp4'

const VideoPlayer = ({playState, setPlaystate}) => {
    const player = useRef(null);

   const closePlayer = (e) =>{
    if(e.target === player.current){
        setPlaystate(false);
    }
   }
  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
        <video src={video} muted autoPlay></video>
    </div>
  )
}

export default VideoPlayer