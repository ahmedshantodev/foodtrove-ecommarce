import React from "react";

const Listitem = ({ className, children, onClick }) => {
  return (
    <li onClick={onClick} className={className}>
      {children}
    </li>
  );
};

export default Listitem;
