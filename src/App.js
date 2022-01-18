// import './App.css';

import React, { Component } from 'react';
import { Statistics } from './components/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = key => {
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  };

  countTotalFeedback = () => {
    Object.values(this.state).reduce((sum, value) => sum + value, 0);
  };

  countPositiveFeedbackPercentage() {}

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    return (
      <>
        <h2>Please leave feedback</h2>
        {Object.keys(this.state).map(key => (
          <button key={key} type="button" onClick={() => this.onBtnClick(key)}>
            {key}
          </button>
        ))}

        <Statistics good={good} neutral={neutral} bad={bad} total={total} />
      </>
    );
  }
}

export default App;
