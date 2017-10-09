import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import template from "./App.rt";
import InterTop from "./components/InterTop/InterTop";


class App extends Component {
  getLogo() {
    return logo;
  }
  render() {
    return template.apply(this);
  }
  get_nav_items() {
    return [
      { title: "item1", slug: "item1" },
      { title: "item2", slug: "item2" },
      { title: "item3", slug: "item3" },
      { title: "item4", slug: "item4" }
    ];
  }
}

export default App;
