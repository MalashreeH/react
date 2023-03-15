import React, { Component } from 'react'
import "./btn.css"

export default class App extends Component {
  constructor()
  {
    super()
    this.state={
      count:0
    }
    
  }
handleIncrement=()=>{
  this.setState({count:this.state.count+1})
  
}
handleDecrement=()=>{
  this.setState({count:this.state.count-1})
  
}
handleReset=function()
{
  this.setState({count:0})
}


  render() {
    return (
      
      <div style={{backgroundColor:"yellow", height:"300px", width:"450px",border:"2px solid blue",justifyContent:"center" , marginTop:"50px",marginLeft:"200px",borderRadius:"200px"}}>
      
        <div  className="mainBlock" style={{  alignItems:"center" ,justifyContent:"center",display:"flex", flexDirection:"column", top:"20px", height:"50vh"}}>
        <h1 style={{color:"red"}}>{this.state.count}</h1>
       
        <div className="btngroup" >
        
        <button onClick={this.handleIncrement}>increment </button>
        <button onClick={this.handleDecrement}>decrement</button>
        <button onClick={this.handleReset.bind(this)}>RESET</button>
      </div></div>
      </div>
    )
  }

}
