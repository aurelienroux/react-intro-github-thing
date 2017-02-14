import React from 'react';

class uClicked extends React.Component {
  state = {
    num:0
  }
  add = () => {
    var val = this.state.num
    this.setState({num:val + 1});
  }
  remove = () => {
    var val = this.state.num
    this.setState({num:val - val});
  }
  render() {
    return (
    <div>
      <div>You clicked on THA BUTTON {this.state.num} times...a waste of time if you ask me</div>
      <span><input type='button' value='AYYO CLICK ME MANN' onClick={this.add}/></span>
      <span><input type='button' value='i reset the counter for a living...its my only function in life' onClick={this.remove}/></span>
    </div>
    );
  }
}

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


export default uClicked;
