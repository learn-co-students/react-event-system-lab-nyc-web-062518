import React, { Component } from 'react'

class Keypad extends Component {

  render() {
    return (
      <input type="password" onKeyUp={this.handleKeyUp}></input>
    )
  }

  handleKeyUp = () => (
    console.log('Entering password...')
  )

}

export default Keypad
