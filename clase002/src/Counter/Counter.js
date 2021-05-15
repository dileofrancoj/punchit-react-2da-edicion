import { useState } from "react";
const Counter = () => {
  // const [getter,setter] = useState(initialValue)
  const [counter, setCounter] = useState(0);

  const handleCounter = (operation) => {
    console.log("Se ejecuta :O");
    if (operation === "+") {
      setCounter(counter + 1);
      return;
    }
    setCounter(counter - 1);
  };

  const unaFuncion = () => () => {
    console.log("una funcion");
  };
  return (
    <>
      {/* Eventos sinteticos -> Virtual DOM */}

      <h3>Contador: {counter}</h3>
      <button onClick={() => handleCounter("+")}>+</button>
      <button onClick={() => handleCounter("-")}>-</button>
      <button onClick={unaFuncion()}>Una funcion</button>
    </>
  );
};

export default Counter;
