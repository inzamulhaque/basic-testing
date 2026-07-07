import { useState } from "react";
import "./UserEvent.css";

const UserEvent = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [loveCount, setLoveCount] = useState<number>(0);

  return (
    <div className="user-event">
      <div className="flex">
        <h1 className="title">Go ahead and type something:</h1>
        <h2 className="user-text">{userInput}</h2>
      </div>

      <input
        className="input"
        type="text"
        onChange={(e) => setUserInput(e.target.value)}
      />

      <h3 className="love-count">Your love count: {loveCount}</h3>

      <div className="button-group">
        <button
          className="btn btn-primary"
          onClick={() => setLoveCount(loveCount + 1)}
        >
          Increase Love
        </button>

        <button className="btn btn-secondary" onClick={() => setLoveCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default UserEvent;
