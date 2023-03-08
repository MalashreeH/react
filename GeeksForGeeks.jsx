import React from "react";
import STYLE from "./geeksForGeeks.module.css"
 
const GeeksForGeeks=()=>{
    return(
        <div className={STYLE.mainBlock3}>
        <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png" alt="" />
       <ul>
       <li><a href="home">HOME</a></li>
        <li><a href="algo">ALGO</a></li>
        <li><a href="ds">DS</a></li>
        <li><a href="languages">LANGUAGES</a></li>
      
       </ul>
        </div>
    )
}
export default GeeksForGeeks;