import React, { Component } from 'react'
import './App.css';

class App extends Component {

  state = {
    clicker: 0
  }

  increaseClicker = () => {
    this.setState({
      clicker: this.state.clicker +1
    })
  }  
  decreaseClicker = () => {
    this.setState({
      clicker: this.state.clicker -1
    })
  }

  render() {
    return (
      <div className="App">
        <input type="number" value={this.state.clicker}></input>
        <button onClick={this.increaseClicker}>Increase</button>
        <button onClick={this.decreaseClicker}>Decrease</button>
      </div>
    )
  }
}

export default App