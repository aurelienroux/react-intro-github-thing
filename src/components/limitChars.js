import React from 'react';

class charLimit extends React.Component {
  state = {
    value:"",
    max: 30
  }
  change = () => {
    this.setState({value: this.refs.charText.value.substr(0, this.state.max)});
  }
  render() {
    if(this.state.value.length === this.state.max){
      return (
      <div>
        <input type="text" ref="charText" value={this.state.value} onChange={this.change} />
        <div>MAX CHARS, only 30 allowed BIHATCHESSSSSSZZZZZ</div>
      </div>
      );
    }else{
      return (
      <div>
        <input type="text" ref="charText" value={this.state.value} onChange={this.change} />
        <div>Total Chars: {this.state.value.length}</div>
      </div>
      );
    }
  }
}

export default charLimit


// getInitialState: function() {
//    return {value: 'Hello!'};
//  },
//  handleChange: function(event) {
//     this.setState({value: event.target.value.substr(0, 140)});
//  },
//  render: function() {
//    var value = this.state.value;
//    return <input type="text" value={this.state.num} onChange={this.handleChange} />;
//  }
