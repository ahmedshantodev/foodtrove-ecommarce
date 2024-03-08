import React from "react";

const Label = ({ labelfor, className, text }) => {
  return (
    <label htmlFor={labelfor} className={className}>
      {text}
    </label>
  );
};

export default Label;
