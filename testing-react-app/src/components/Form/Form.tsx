import React, { useState } from "react";

const Form = ({ onSubmit }: { onSubmit: (data: string) => void }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(inputValue);
  };
  return (
    <>
      <div>
        <h2>{inputValue}</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;
