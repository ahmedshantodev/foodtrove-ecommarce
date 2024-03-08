import React from "react";

const Input = ({ type, id, placeholder, className }) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default Input;
