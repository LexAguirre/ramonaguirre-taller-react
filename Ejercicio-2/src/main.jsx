import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  // save clicks of each button to its own states
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementGood = () => setGood(good + 1);
  const incrementNeutral = () => setNeutral(neutral + 1);
  const incrementBad = () => setBad(bad + 1);
  let total = good + neutral + bad;
  let average;
  if (total === 0) {
    average = 0;
  } else {
    average = (good - bad) / total;
  }
  let positive;
  if (total === 0) {
    positive = 0;
  } else {
    positive = (good / total) * 100;
  }
  return (
    <div>
      <h1>Give Feedback</h1>
      <p></p>
      <button onClick={incrementGood}>Good</button>
      <button onClick={incrementNeutral}>Neutral</button>
      <button onClick={incrementBad}>Bad</button>
      <p></p>
      <h1>Statistics</h1>
      <p></p>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Average: {average}</p>
      <p>Positive: {positive + " %"}</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
