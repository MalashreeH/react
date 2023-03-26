import React, { useState } from 'react';
import Back from "./back.jpg"
const LoginPage=()=> {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div 
    
    style={{
      backgroundImage: 'url('+Back+')',
      backgroundSize: "cover",
      height: "100vh",
      color: "#f5f5f5",
      border:"2px solid red",marginTop:"50px",marginLeft:"300px",height:"500px",width:"800px", paddingTop:"70px",paddingLeft:"20px",textAlign:"center",lineHeight:"50px",justifyContent: 'center',backgroundColor:"aqua"}}>

    <form onSubmit={handleSubmit}>
      <label >
        Username:
        <input type="text" value={username} onChange={handleEmailChange} placeholder="Username" />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
      </label>
      <br />
      <button type="submit">Login</button>
    </form></div>
  );
}

export default LoginPage;
