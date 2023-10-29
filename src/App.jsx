import { useState } from "react";

const Feedback = ({ handleGood, handleBad, handleNeutral }) => {
  return (
    <div>
      <h1>give feedback</h1>
      <FeedbackButton text="good" handleClick={handleGood} />
      <FeedbackButton text="neutral" handleClick={handleNeutral} />
      <FeedbackButton text="bad" handleClick={handleBad} />
    </div>
  );
};

const FeedbackButton = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StaticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};
const Statistics = ({ good, neutral, bad }) => {
  let all = good + neutral + bad;
  if (all === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StaticLine text="good" value={good} />
            <StaticLine text="neutral" value={neutral} />
            <StaticLine text="bad" value={bad} />
            <StaticLine text="all" value={all} />
            <StaticLine text="average" value={(good - bad) / all} />
            <StaticLine text="positive" value={(good / all) * 100 + " %"} />
          </tbody>
        </table>
      </div>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <>
      <Feedback
        handleGood={handleGood}
        handleBad={handleBad}
        handleNeutral={handleNeutral}
      />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
