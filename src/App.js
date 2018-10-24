import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import bg_img from './port-bg.jpg';
// import arrow_down from './arrow-down.jpg';



class App extends Component {
  render() {
    return (
      <div className="App">
        <img alt="background" className="background" src={bg_img} width="100%"  />
        <h1 className="App-title">Hi, I'm Yumna!</h1>
        <h3 className="App-title">I'm a Full Stack Web Developer </h3>
        {/* <img alt="arrow-down" className="arrow-down" src={arrow_down} /> */}
      </div>
    );
  }
}

export default App;
