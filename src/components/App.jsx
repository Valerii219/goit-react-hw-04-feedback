import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";
import React, { Component } from "react";
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleClick = option => {
    this.setState(prevState => ({
     [option]: prevState[option] + 1,
    }));
  };

  render() {
    const {good, neutral, bad} = this.state;
    const total =  good + neutral + bad;
  
    const positivePercentage = () => {
      if (total === 0) {
        return 0;
      }
  
      return Math.round((good / total) * 100);
    };
  
    return (
      <>
        <div
          style={{
            height: "100vh",
            fontSize: 30,
            color: "#010101",
            paddingLeft:"30px"
          }}
        >
           <Section title="Please Leave Feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleClick}
          /></Section>

{total > 0 ? (
            <Section title="Statistics">
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage()}
              />
            </Section>
          ) : (
            <Section title="Statistics">
              <Notification message ="There is no feedback"/>
            </Section>
          )}
        </div>
      </>
    );
  }
}

export default App;

