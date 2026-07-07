import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Counter.css";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "../../redux/features/counter/counterSlice";
import type { AppDispatch } from "../../redux/store";

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch<AppDispatch>();

  const [amount, setAmount] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const value = Number(amount);

    if (!isNaN(value)) {
      dispatch(incrementByAmount(value));
      setAmount(null);
    }
  };

  return (
    <div className="counter-container">
      <h1>Counter: {count}</h1>

      <div className="button-group">
        <button onClick={() => dispatch(increment())}>Increment</button>

        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>

      <form onSubmit={handleSubmit} className="amount-form">
        <input
          type="number"
          placeholder="Enter amount"
          value={amount || ""}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <button type="submit">Add Amount</button>
      </form>
    </div>
  );
};

export default Counter;
