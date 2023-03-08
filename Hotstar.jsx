import React from "react";
import STYLE from "./hotstar.module.css"
 
const Hotstar=()=>{
    return(
    <div className={STYLE.navBlock}>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlIOdp8keszqxIEyLZpAikhX0M_xngJpr6sWBOZfrA&s" alt="" />
    <ul>
     <li><a href="tv">TV</a></li>
     <li><a href="movies">MOVIES</a></li>
     <li><a href="sports">SPORTS</a></li>
     <li><a href="news">NEWS</a></li>
     <li><a href="premium">PREMIUM</a></li>
    </ul>
    <div className={StyleSheet.searchbar}> <input type="text" name="" id="" placeholder="search"/></div>
     </div>)
}
export default Hotstar;