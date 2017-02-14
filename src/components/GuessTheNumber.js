import React from 'react';

class guessGame extends React.Component {
  state={
    randomNumber: Math.floor(Math.random() * 101),
    howManyTries: 5,
    guessedNums: " ",
  }

  startGame = () => {
    this.setState({randomNumber: Math.floor(Math.random() * 101),
    howManyTries: 5,
    guessedNums: " ",
    guess:"null"})
  }

  check = () => {
    var val = this.refs.number.value
    console.log(this.state.randomNumber);
    if(val < this.state.randomNumber){
      this.setState({guess:"low",
      howManyTries: this.state.howManyTries - 1,
      guessedNums: this.state.guessedNums +" "+val})
    }else if(val > this.state.randomNumber){
      this.setState({guess:"high",
      howManyTries: this.state.howManyTries - 1,
      guessedNums: this.state.guessedNums +" "+val})
    }else{
      this.setState({guess:"win"})
    }
  }

  render() {
    if(this.state.howManyTries === 0){
      return (
      <div>
        <div>YOU LOST YOU LOSSER here have some low quality virtual table salt...</div>
        <input type='button' value="New Game" onClick={this.startGame}/>
        <div>Tries left: { this.state.howManyTries }</div>
      </div>
      );
    }else if(this.state.guess === "high"){
      return (
      <div>
        <div>Guess a numba between 1 to 100</div>
        <div>U too high man...CHILL</div>
        <div>You Guessed: { this.state.guessedNums }</div>
        <input ref="number" type='number'/>
        <input type='button' value="try again" onClick={this.check}/>
        <div>Tries left: { this.state.howManyTries }</div>
      </div>
      );
    }else if(this.state.guess === "low"){
      return (
        <div>
          <div>Guess a numba between 1 to 100</div>
          <div>U to low...what are you a chiken???</div>
          <div>You Guessed: { this.state.guessedNums }</div>
          <input ref="number" type='number'/>
          <input type='button' value="try again" onClick={this.check}/>
          <div>Tries left: { this.state.howManyTries }</div>
        </div>
      );
    }else if(this.state.guess === "win"){
      return (
      <div>
        <div>YOU WON MAN, you deserve a break, here have some virtual ice tea ;)</div>
        <input type='button' value="New Game" onClick={this.startGame}/>
      </div>
      );
    }else{
      return (
      <div>
        <div>Guess a numba between 1 to 100</div>
        <input ref="number" type='number'/>
        <input type='button' value="Start" onClick={this.check}/>
        <div>Tries left: { this.state.howManyTries }</div>
      </div>
      );
    }
  }
}

export default guessGame
