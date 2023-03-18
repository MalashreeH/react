import React,{useState} from "react"
const Hooks=()=>{
let [username,setUsername]=useState("mala")
let [count,setCount]=useState(0)
let handleChange=()=>{
    setUsername("SHREE")
}
let handleCountChange=()=>{
    setCount(1)
}
return(
    <>
    <h1>{username}</h1>
    <h2>{count}</h2>
    <button onClick={handleChange}>change name</button>
    <button onClick={handleCountChange}>change counter</button>
    </>
)

}
export default Hooks