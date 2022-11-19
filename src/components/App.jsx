import React, { useState } from "react";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";
import Statistics from "./Statistics/Statistics";
import Feedback from "./Feedback/Feedback";
import style from './App.module.css'

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onFeedbackBtnClick = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };


  // handleIncrement = option => {
  //   this.setState(prevState => {
  //     return { [option]: prevState[option] + 1 };
  //   });
  // };

  const countTotalFeedback = () => {
    // const totalValue = Object.values(this.state);
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = Number(
      ((good / countTotalFeedback()) * 100).toFixed(0)
    );
    // const value = this.countTotalFeedback();
    // const percentage = Math.round((this.state.good / value) * 100);

    // if (!percentage) return 0;
    return positivePercentage;
  };

  const totalFeedbacks = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const options = ['good', 'neutral', 'bad'];

  return (
      <div className={style.wrapper}>
        <Section title="Please leave feedback">
          <Feedback
            options={stateName}
            onLeaveFeedback={onFeedbackBtnClick}
          />
        </Section>

        <Section title="Statistics">
          {value === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={value}
              positivePercentage={percent}
            />
          )}
        </Section>
      </div>
    );
  }
}