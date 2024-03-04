import React, { Component } from 'react'
export default class SimpleCounterComponent extends Component {
  
    constructor(){
        super()
        this.state={
            count:0,
            toggle:true,
        }
    }

    changeToggle=()=>{
        this.setState({
            toggle: !this.state.toggle
        })
    }

    increaseCount=()=>{
        if(this.state.toggle){
            this.setState({
                count:this.state.count+1
            })
        }
        else{
            this.setState({
                count:this.state.count
            })
        }
    }

    render() {
        console.warn("This is Simple Component")
    return (
      <div>
        <hr />
        <h1>Simple Component</h1>
        <h3>{this.state.count}</h3>
        <button onClick={this.changeToggle} style={{backgroundColor:`${this.state.toggle?"green":"red"}`}}>Toggle</button>
        <button onClick={this.increaseCount}>+</button>
        <hr />
      </div>
    )
  }
}