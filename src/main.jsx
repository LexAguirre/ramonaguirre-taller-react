import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const parts = [
    "Fundamentals of React",
    "Using props to pass data",
    "State of a component",
  ];

  const exercise = [10, 7, 14];

  return (
    <div>
      <Header courseName="Half Stack application development" />
      <Content coursePart={parts} courseExercise={exercise} />
      <Total ejercicios={exercise} />
    </div>
  );
};

const Header = ({ courseName }) => {
  <div>
    <h1>{courseName}</h1>
  </div>;
};

const Content = ({ coursePart }, { courseExercise }) => {
  {
    console.log(coursePart, courseExercise);
  }
  for (const i = 1; (i = coursePart.length); i++) {
    console.log(i);
    console.log(coursePart.length);
    <p>
      {coursePart[i]} {courseExercise[i]}
    </p>;
  }
};

const Total = (ejercicios) => {
  <p>Number of exercise for {ejercicios[0] + ejercicios[1] + ejercicios[2]}</p>;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
