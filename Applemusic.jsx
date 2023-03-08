import React from "react";
import STYLE from "./applemusic.module.css"

const Applemusic=()=>{
    return(
        <div className={STYLE.mainBlock1}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Apple_Music_logo.svg/2560px-Apple_Music_logo.svg.png" alt="" />
            <ul>
        <li><a href="mac">MAC</a></li>
        <li><a href="ipad">iPAD</a></li>
        <li><a href="iphone">iPHONE</a></li>
        <li><a href="watch">WATCH</a></li>
        <li><a href="tv">TV</a></li>
        <li><a href="music">MUSIC</a></li>
        <li><a href="support">SUPPORT</a></li>
        </ul>
        </div>
    )
}
export default Applemusic;