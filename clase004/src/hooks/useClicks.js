import { useState } from "react";

export const useClicks = (initialCounter) => {
  const [clicks, setClicks] = useState(initialCounter);

  const increment = () => {
    setClicks(clicks + 1);
  };

  const decrement = () => {
    setClicks(clicks - 1);
  };

  return {
    increment,
    decrement,
    clicks,
  };
};
