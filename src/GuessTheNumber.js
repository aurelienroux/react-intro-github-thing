import React from 'react';

class guessGame extends React.Component {
  check = () => {
    var val = this.refs.number.value
    if(val < this.props.randomNumber){
      alert("you are to low")
    }else if(val>this.props.randomNumber){
      alert("you are to hi")
    }else{
      alert("you win")
    }
  }
  render() {
    return (
    <div>
      <input ref="number" type='number'/>
      <input type='button' onClick={this.check}/>
    </div>
    );
  }
}

export default guessGame
// class guessGame extends React.Component {
//
//   state = {
//     num:0
//   }
//   check = () => {
//     var val = this.refs.number.value;
//     this.setState({num:val});
//   }
//   render() {
//     return (
//     <div>
//       <div className="test">{this.state.num ? this.state.num : 5}</div>
//       <input ref="number" type='number'/>
//       <input type='button' onClick={this.check}/>
//     </div>
//     );
//   }
// }
