import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import bg_img from './portfolio-bg-pic.jpg';


class App extends Component {
  render() {
    return (
      <div className="App">
      <img alt="background" className="background" src={bg_img} width="100%"  />
          <h1 className="App-title">Hi! I'm Yumna</h1>
          <h3 className="App-title">I'm still working on my portfolio so please be patient with me </h3>
      </div>
    );
  }
}

export default App;
