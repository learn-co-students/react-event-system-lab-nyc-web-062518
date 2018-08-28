// Code Keypad Component Here
import React, { Component } from "react"

class Keypad extends Component {

  passwordInput = () => console.log("Entering password...")

  render() {
    return (
      <input type="password" onKeyUp={this.passwordInput}></input>
    )
  }
}

export default Keypad
