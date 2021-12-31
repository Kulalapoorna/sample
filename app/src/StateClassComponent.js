
import React, { Component } from 'react'
import './State.css'
export default class StateClassComponent extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            name:"divya",
            count:0
        }
    }
    render() {
        setTimeout(()=>{
            this.setState({
                name:"divyaa.A"
            })
        },2000)
        return (
            <div>
                <h1>state{this.state.name}</h1>
                <h1>count: {this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count-1
                    })
                }}>Increment count</button>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>Reset</button>
                <button onClick={()=>{
                    this.setState({
                        
                        number:0
                    })
                }}>Reset</button>
            </div>
            
                
        )
    }
}

