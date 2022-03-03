import React from "react";

const InputField = ({ text, handleSubmit, handleInput }) => {
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => handleInput(e.target.value)}
      />
      <button type="button" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};

export default InputField;
