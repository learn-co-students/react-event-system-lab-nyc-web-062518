import React, {Component} from 'react'

export default class Keypad extends Component{
  constructor(){
    super()
    this.state = {
      password: ''
    }
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  handleKeyUp(event){
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log('entering password...')
  }

  render(){
    return(
      <form>
        <input type="password" name="password" onChange={this.handleKeyUp} value={this.state.password} />
      </form>
    )
  }

}
