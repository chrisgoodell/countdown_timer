import React from 'react';
import './App.css'

import Clock from './Clock';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline: ""
    };
    this.changeDeadline = this.changeDeadline.bind(this);
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline})
  }

  render() {
    return (
    <div className="App">
      <div className="title">Countdown to {this.state.deadline}</div>
      <Clock 
        deadline={this.state.deadline}
      />
      <div className="inputField">
        <input 
          placeholder="new date"
          onChange = {event => this.setState({newDeadline: event.target.value})} 
        />
        <button onClick={() => this.changeDeadline()} >Submit</button>
      </div>
    </div>
    )
  }
}

export default App;