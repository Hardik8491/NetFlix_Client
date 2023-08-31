import React from 'react'
import styled from 'styled-components'
import {BsArrowLeft} from "react-icons/bs"
import video from "../assets/video.mp4"
import { useNavigate } from 'react-router-dom'

const Player = () => {
    const navigate =useNavigate();
  return (

    <div>
        <Container>
          <div className="player">
         <div className="back">
            <BsArrowLeft onClick={()=>navigate(-1)}/>
         </div>
         <video src={video} autoPlay loop controls muted></video>
            </div>
        </Container>
    </div>
  )
}

export default Player  
const Container =styled.div`
.plater{
    width:100vw;
    height:100vh;
}
.back{
    position:absolute;
    z-index:1;
    padding:2rem;



svg{
    font-size:3rem;
    cursor:pointer;
}

}

video{
    height:100%;
    width:100%;
    object-fit:cover;

}
`;