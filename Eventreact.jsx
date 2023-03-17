import React, { Component } from 'react'

export default class Eventreact extends Component {
    constructor(){
        super()
        this.state={
            username:"Appu"
        }
    }
    componentDidMount()
{
    let btn=document.querySelector("button")
    btn.addEventListener("click",()=>{
        this.setState({username:this.state.username=" APPU SIR"})
    })
}  render() {
    return (
        <>
        <div>
        <h1>{this.state.username}</h1>
        </div>
        <button>Change</button>
        </>
      
    )
  }
}
