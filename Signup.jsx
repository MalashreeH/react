import React, { useState } from 'react';
import Back2 from "./back2.jpg"
const SignupPage=()=> {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
  }

  return (
    <div style={{
      backgroundImage: 'url('+Back2+')',
      backgroundSize: "cover",
      height: "100vh",
      color: "#f5f5f5",
      border:"2px solid red",marginTop:"50px",marginLeft:"300px",height:"550px",width:"800px", paddingTop:"60px",paddingLeft:"20px",textAlign:"center",lineHeight:"50px",justifyContent: 'center',backgroundColor:"aqua"}}>

    <form onSubmit={handleSubmit}>
      <label>
      Email  :
          
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
        
      </label>
      <br />
      <label>
      Username:
        
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Username"/>
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}placeholder="Password" />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
    </div>
  );
}

export default SignupPage;
