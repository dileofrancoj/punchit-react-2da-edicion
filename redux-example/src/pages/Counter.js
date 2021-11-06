import { useSelector, useDispatch } from "react-redux";
import { INCREMENT, DECREMENT } from "../redux/counterDuck";

const Counter = () => {
  const { count } = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
    </div>
  );
};

export default Counter;
