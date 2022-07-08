import React, { Component } from 'react'

export default class TestComponent extends Component {
  constructor(){
    super()
    this.state={
      empname:"Ramandeep",
      salary:23000,
      branch:"Mohali"
    }
  }
  changeValue=()=>{
    this.setState({
      empname:"Deep",
      salary:27000,
      branch:"Mohali"

    })

  }

  componentDidMount(){
   
   // console.log("component did mount")
  }
  componentDidUpdate(){
   
  //  console.log("component did Update ")
  }

  render() {
    return (

      <div>
      <h2 class="text-black">Class Compononent</h2>
      {this.state.empname}
      {this.state.salary}
      {this.state.branch}
      <button onClick={this.changeValue}>change Value</button>
      </div>
    )
  }
}
