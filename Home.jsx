import React from 'react'
import Back  from "./insta1.jpg"
const Home = () => {
  return (
    <div style={{
      backgroundImage: 'url('+Back+')',
      backgroundSize: "",
      height: "100vh",
      color: "#f5f5f5"}}>
     <marquee behavior="scroll" scrollamount='20' direction="right"> <h1 style={{justifyContent:"center",color:"black"}}>WELCOME TO HOME PAGE</h1>
     </marquee> </div>
  )
}

export default Home