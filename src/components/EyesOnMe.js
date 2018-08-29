// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {

  onFocus = () => {console.log('Good!')}

  onBlur = () => {console.log('Hey! Eyes on me!')}

  render(){
    return (
      <div>
        {/* <button onClick={this.focus}>FOCUS</button>
        <button onClick={this.blur}>BLUR</button> */}
        <button onFocus={this.onFocus} onBlur={this.onBlur}>
          Eyes on me, please!
        </button>
      </div>
    )
  }

}


export default EyesOnMe;
