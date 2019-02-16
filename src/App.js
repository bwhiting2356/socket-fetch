import React, { Component } from 'react';
import './App.css';

import { socketFetch } from './websocket-client';

class App extends Component {
  state = { output: '', error: '' }
  handleButtonOneClick = () => {
    socketFetch({request: 'fromOne', success: 'A', errors: ['oops!']})
      .then(response => {
        this.setState({output: response})
      })
      .catch(error => {
        this.setState({ error: error.message })
      })
  }

  handleButtonTwoClick = () => {
    socketFetch({request: 'fromTwo', success: 'BB', errors: ['oy!']})
      .then(response => {
        this.setState({ output: response})
      })
      .catch(error => {
        this.setState({ error: error.message })
      })
  }

  handleButtonThreeClick = () => {
    socketFetch({request: 'fromThree', success: 'C'})
      .then(response => {
        this.setState({output: response})
      })
      .catch(error => {
        this.setState({ error: error.message })
      })
  }


  render() {
    return (
      <div className="App">
          <button onClick={this.handleButtonOneClick}>One</button>
          <button onClick={this.handleButtonTwoClick}>Two</button>
          <button onClick={this.handleButtonThreeClick}>Three</button>
          <div className="output">{this.state.output}</div>
          <div className="error">{this.state.error}</div>
      </div>
    );
  }
}

export default App;
