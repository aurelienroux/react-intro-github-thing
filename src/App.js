import React, { Component } from 'react';
import logo from '../public/logo.svg';
import './css/App.css';
import ImageCaption from './components/imageCaption.js';
import Layout from './components/Layout.js'
import Guess from "./components/GuessTheNumber.js"
import UClicked from './components/uclicked.js'
import CharLim from './components/limitChars.js'
import GitProfile from './components/githubPro.js'
var imageList = [
  {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
  {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
  {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to LIFE</h2>
        </div>
        <hr/>
        <h2>
          <h2>Testing first image thing</h2>
          <ImageCaption source="http://i.imgur.com/D8JWn.jpg" text="Katts will be RAINBOWS CATSZZZ" />
        </h2>
        <hr/>
        <div>
          <h2>Testing Image stuff</h2>
          { imageList.map((ele) => <ImageCaption text={ele.text} source={ele.source} />) }
        </div>
        <hr/>
        <h2>Complete Guessin Game</h2>
        <Guess/>
        <hr/>
        <h2>AYYO this is a buuton counter</h2>
        <UClicked/>
        <hr/>
        <h2>ma name a jeff</h2>
        <CharLim/>
        <hr/>
        <h2>githubthing works majigy get jigy wit it</h2>
        <GitProfile/>
      </Layout>
      </div>
    );
  }
}

export default App;
