import React from "react";
import { Link } from "react-router-dom";

const Selector = ({ links }) => {
  return (
    <div>
      {links.map((link) => {
        <Link id={link.isActive && "active"} to={link.to}>
          {link.name}
        </Link>;
      })}
    </div>
  );
};

export default Selector;
