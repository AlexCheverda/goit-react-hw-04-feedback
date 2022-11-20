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

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = Number(
      ((good / countTotalFeedback()) * 100).toFixed(0)
    );
    return positivePercentage;
  };

  const totalFeedbacks = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const options = ['good', 'neutral', 'bad'];

  return (
    <div className={style.wrapper}>
      <div className={style.feedbacks}>
        <Section title="Please leave feedback">
          <Feedback
            options={options}
            onLeaveFeedback={onFeedbackBtnClick}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedbacks === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedbacks}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    </div>
  );
};

export default App;