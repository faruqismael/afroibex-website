import React from "react";
import "./button.css";

function Button({ name }) {
  return (
    <button className="button">
      <p className="button__name">{name}</p>
    </button>
  );
}

export default Button;
