import React, { Component } from 'react'

export default class Exevent extends Component {
    constructor(){
        super()
        this.state={
            username:""
        }
    }
    componentDidMount()
{
    let input=document.querySelector("input")
    input.addEventListener("keypress",(e)=>{
        this.setState({username:e.target.value})
    })
}  render() {
    return (
        <>
        <div>
        <h1>{this.state.username}</h1>
        </div>
        <input type="text" />
        </>
      
    )
  }
}
