import React, { Component } from 'react';
import Matrix from './Matrix' 

export default class Cell extends Component {
  
  constructor(){
    super()
    this.state={
      color:''
    }
  }
  
  

  
  render() {
    return (
      <div id="cell" style={{backgroundColor: '#fff'}} className='cell' >
        <button onClick={this.setState()}></button>
      </div>
    )
  }
  
}
