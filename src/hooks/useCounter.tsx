import { useState } from "react";

export const useCounter = (counter: { initialCount: number }) => {
  const [count, setCount] = useState(counter.initialCount);
  const increment = () => setCount((_) => ++_);
  const decrement = () => setCount((_) => --_);
  return { count, increment, decrement };
};
