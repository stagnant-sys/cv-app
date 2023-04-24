import React, { Component } from 'react';
import './App.css';
import InputSection from './components/InputSection';

export default class App extends Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div>
        <InputSection />
      </div>
    );
  }
}