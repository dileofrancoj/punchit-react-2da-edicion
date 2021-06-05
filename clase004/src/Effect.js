import { useEffect, useState } from "react";

const Effect = () => {
  const [clicks, setClicks] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Solo me ejcuto al principio");
    // API CALL
  }, []);

  useEffect(() => {
    console.log("UseEffect de clicks");
    // solo me ejecuto cuando cambia el state clicks
  }, [clicks]);

  useEffect(() => {
    console.log("UseEffect de names");
    // solo me ejecuto cuando cambia el state name
  }, [name]);
  return (
    <div>
      <h1>Ejemplo de useEffect</h1>
      <button onClick={() => setClicks(clicks + 1)}>+1</button>
      <button onClick={() => setClicks(clicks - 1)}>-1</button>
      <hr />
      <input
        type="text"
        placeholder="nombre de un personaje"
        onChange={(e) => setName(e.target.value)}
      />
      <hr />
      <p>Clicks: {clicks}</p>
      <p>Name: {name}</p>
    </div>
  );
};

export default Effect;
