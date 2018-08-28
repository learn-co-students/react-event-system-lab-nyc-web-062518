import React, { Component } from 'react'

class Keypad extends Component {
  handleInput = () => console.log('Entering password...')

  render(){
    return (
      <div>
        <input onKeyUp={this.handleInput} type="password"/>
      </div>
    )
  }
}

export default Keypad
