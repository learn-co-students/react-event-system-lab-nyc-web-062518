import React, {Component} from 'react'

export default class EyesOnMe extends Component{
  constructor(){
    super()

    this.focusHandler = this.focusHandler.bind(this)
    this.blurHandler = this.blurHandler.bind(this)
  }

  focusHandler(){
    console.log('Good!')
  }

  blurHandler(){
    console.log('Hey! Eyes on me!')
  }


  render(){
    return(
      <button onFocus={this.focusHandler} onBlur={this.blurHandler}>Hello</button>
    )
  }
}
