import React from "react";

const Heading = (props) => {
  return props.as ? (
    <props.as className={props.className}>{props.text}</props.as>
  ) : (
    <h3 className={props.className}>{props.text}</h3>
  );
};

export default Heading;
