import React, { Component } from 'react';
import './App.css';

//components
import Test from './components/Test'

class App extends Component {
  render() {
    return (
      <div>
        Hello world!<br/>
        <Test />
      </div>
    );
  }
}

export default App;
