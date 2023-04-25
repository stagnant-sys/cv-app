import React, { Component } from 'react';
import './App.css';
import InputSection from './components/InputSection';
import DisplaySection from './components/DisplaySection';

export default class App extends Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div className="app">
        <InputSection />
        <DisplaySection />
      </div>
    );
  }
}