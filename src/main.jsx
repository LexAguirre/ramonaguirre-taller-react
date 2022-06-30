import React from "react";
import ReactDOM from "react-dom/client";

const Header = ({ course }) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
};

const Content = ({ cParts }, { cExercises }) => {
  console.log(cParts.length);
  for (let i = 0; i > cParts.length; i++) {
    console.log(cParts);
    console.log(cExercises);
    console.log(i);

    <p>
      {cParts[i]} {cExercises[i]}
    </p>;
  }
};

const Total = ({ tExercises }) => {
  let sum = 0;
  tExercises.map((tExercises) => (sum += tExercises));
  return (
    <div>
      <p>Number of exercises {sum}</p>
    </div>
  );
};

const App = () => {
  const parts = [
    "Fundamentals of React",
    "Using props to pass data",
    "State of a component",
  ];
  const exercises = [10, 7, 14];

  return (
    <div>
      <Header course="Half Stack application development" />
      <Content cParts={parts} cExercises={exercises} />
      <Total tExercises={exercises} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
