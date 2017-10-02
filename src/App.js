import React, { Component } from 'react';
import './App.css';

//components
import Counter from './components/Counter'

class App extends Component {
  render() {
    return (
      <div>
        Hello world!<br/>
        <Counter />
      </div>
    );
  }
}

export default App;
