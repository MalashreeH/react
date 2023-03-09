import React from "react"; 
import Student from "./student.jsx"
import JSON from "./studentdata.json";
import "./global.css"
const App=()=>
{
    
    return(
        <div>
            
        <Student data={JSON}/>
        </div>
    )
}
export default App