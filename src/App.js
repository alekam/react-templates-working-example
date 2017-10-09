import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import template from "./App.rt";

class App extends Component {
  getLogo() {
    return logo;
  }
  render() {
    return template.apply(this);
  }
}

export default App;
