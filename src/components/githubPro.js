import React from 'react';

class gitHubPro extends React.Component {
  state = {
    rendered: false,
    value: ""
  }

  getInfo = () => {
    this.setState({value: this.refs.charText.value});
    var that = this
    fetch('https://cors-anywhere.herokuapp.com/https://api.github.com/users/'+this.refs.charText.value)
    .then(function(response) {
      if (response.status === 200) {
        return response;
      }else{
        throw new Error(response.statusText);
      }
    })
    .then(result => result.json())
    .then(function(res){
      if(res.message){
        that.setState({er: "Twas the night before xmas and an error was found...ERROR: res.message"})
      }else{
        that.setState({
          username: res.login,
          photo: res.avatar_url,
          bio: res.bio,
          blog: res.blog
        })
      }
    })
    .catch(function(err){
      console.log("lol",err);
      that.setState({err: "Twas the night before xmas and an error was found...ERROR: "+err})
    })
  }

  render(){
    if(this.state.username){
      return(
        <div>
          {/* onChange={this.getInfo} */}
          <input type="text" ref="charText" />
          <input type='button' value="Check For User" onClick={ this.getInfo }/>
          <div className="profileBox">
            <span>
              <img className="userpic" src={ this.state.photo } alt=""/>
            </span>
            <span id="username">{ this.state.username }</span>
            <hr/>
            <div className="contentGit">{ this.state.bio }</div>
            <hr/>
            <div className="contentGit">{ this.state.blog }</div>
          </div>
        </div>
      )
    }else if(this.state.er){
      return(
        <div>
          <input type="text" ref="charText" />
          <input type='button' value="Check For User" onClick={ this.getInfo }/>
          <div>{ this.state.er }</div>
        </div>
      )
    }else if(this.state.err){
      return(
        <div>
          <input type="text" ref="charText" />
          <input type='button' value="Check For User" onClick={ this.getInfo }/>
          <div>{ this.state.err }</div>
        </div>
      )
    }else{
      return(
        <div>
          <input type="text" ref="charText"/>
          <input type='button' value="Check For User" onClick={ this.getInfo }/>
        </div>
      )
    }
  }
}
gitHubPro.propTypes = {
  username: React.PropTypes.string
};
export default gitHubPro
