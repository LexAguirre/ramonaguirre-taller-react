const App = () => {
  const [counter, setCounter] = useState(0);
  const [isLodding, setIsLodding] = useState(true);
  const [data, setData] = useState({});

  setTimeout(() => {
    setData("Aqui estan tus datos!");
    setIsLodding(false);
  }, 10000);

  //setInterval(() => setCounter(counter + 1), 1000);
  const incrementByOne = () => {
    if (counter <= 50) {
      setCounter(counter + 1);
    } else {
      setCounter(counter + 10);
    }
  };
  const decrementByOne = () => setCounter(counter - 1);
  const X2 = () => setCounter(counter * 2);
  const resetToZero = () => setCounter(0);

  let toRender;
  if (isLodding) {
    toRender = <h1>No molestes, estoy cargando...</h1>;
  } else {
    toRender = <p>{data}</p>;
  }
  return (
    <div>
      {toRender}
      <div>{counter}</div>
      <button onClick={incrementByOne}>Increment</button>
      <br></br>
      <button onClick={decrementByOne}>Decrement</button>
      <br></br>
      <button onClick={X2}>X2</button>
      <button onClick={resetToZero}>Reset</button>
    </div>
  );
};

export default App;
