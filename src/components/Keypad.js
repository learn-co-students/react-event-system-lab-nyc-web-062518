import React, {Component} from 'react'

export default class Keypad extends Component{
  constructor(){
    super()
    this.state = {
      password: ''
    }
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  handleKeyUp = () => {console.log("Entering password...")}



  render(){
    return(
        <input type="password" name="password" onKeyUp={this.handleKeyUp} />
    )
  }

}
