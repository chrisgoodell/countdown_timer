import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2018'
    }
  }

  render() {
    return (
    <div className="App">
      <div className="title">Countdown to {this.state.deadline}</div>
      <div>
        <div className="timeItem">14 days</div>
        <div className="timeItem">6 hours</div>
        <div className="timeItem">27 minutes</div>
        <div className="timeItem">42 seconds</div>
      </div>
      <div>
        <input placeholder="new date" />
        <button>Submit</button>
      </div>
    </div>
    )
  }
}

export default App;