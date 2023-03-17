import React, { useRef } from "react";
import { useState } from "react";
import video from "../Video/Christmas.mp4"
import VideoPlayer from "./VideoPlayer";

function Video(){
let[play,setplay]=useState(true);


let videoRef=useRef()
let handleplay=()=>{
    if(play===false){
        videoRef.current.play()
    }else{
        videoRef.current.pause()
        setplay(false)
    }
}
    return<>
    <VideoPlayer value={{video,handleplay}} ref={videoRef}/>
    </>
}
export default Video;