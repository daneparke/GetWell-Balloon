import React, { Component } from 'react';
import Balloon from './component/Balloon';
import Confetti from './component/Confetti';
import audio from './component/baloon-sound.wav'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      switcher: true,
    }
  }
  growBalloon = () => {
    if (this.state.switcher === true) {
      this.setState({
        switcher: false
      })
    } else {
      this.setState({
        switcher: true
      })
    }
  }

  grow = () => {
    var balloon = document.querySelector('.grow')
    var audio = document.getElementById("audio");
    audio.play();
    balloon.setAttribute('class', 'bigger')
    setTimeout(function () {
      balloon.style.display = 'none'
      var show = document.querySelector('.hidden')
      show.classList.remove('hidden')
      var header = document.querySelector('header')
      header.innerHTML = "Don't Die Kate"
      var song = document.getElementById('song')
      song.play();
    }, 5200)

  }
  render() {
    return (
      <body >
        <header growBalloon={this.state.growBalloon}>Click Balloon</header>
        <div className='container'>
          <Balloon growBalloon={this.state.growBalloon} grow={this.grow} />
          <Confetti growBalloon={this.state.growBalloon} />
        </div>
        <audio id="audio" src={audio}></audio>
      </body>
    );
  }
}

export default App;

