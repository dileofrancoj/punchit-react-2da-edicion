import { useClicks } from "./hooks/useClicks";

const Clicks = () => {
  const { increment, decrement, clicks } = useClicks(0);
  return (
    <div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <h3>Clicks: {clicks}</h3>
    </div>
  );
};

export default Clicks;
