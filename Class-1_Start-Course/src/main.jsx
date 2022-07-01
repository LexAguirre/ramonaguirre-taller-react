import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const HelloWorld = ({ title }) => (
  <div>
    <h1>{title}</h1>
  </div>
);

const List = ({ items }) => (
  <ul>
    {items.map((item) => {
      return <li>{item}</li>;
    })}
  </ul>
);

const App = () => {
  const myList = [
    "First",
    "Second",
    "Third",
    "Fourth",
    "Fifth",
    "Sixth",
    "Seventh",
  ];
  return (
    <div>
      <List items={myList} />
      <HelloWorld title="Hello World ✌🏻＼（〇_ｏ）／" />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
