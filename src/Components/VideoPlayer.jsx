import React,{forwardRef} from "react";
import { useRef } from "react";

let VideoPlayer=forwardRef((props,ref)=>{
    return <>
    
    <video src={props.value.video} ref={ref} onClick={props.value.handleplay}></video>

    </>
})
export default VideoPlayer;