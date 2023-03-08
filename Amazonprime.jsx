import React from "react";
import STYLE from "./amazonprime.module.css"
 
const Amazonprime=()=>{
    return(
        <div className={STYLE.mainBlock2}>
            <img src="https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png" alt="" />
            <ul>
        <li><a href="home">HOME</a></li>
        <li><a href="originals">ORIGINALS</a></li>
        <li><a href="tv shows">TV SHOWS</a></li>
        <li><a href="moviesh">MOVIES</a></li>
        <li><a href="kids">KIDS</a></li>
        <li><a href="criket">CRIKET</a></li>
          </ul>

        </div>
    )
}
export default Amazonprime;