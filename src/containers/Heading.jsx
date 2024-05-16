import React from "react";

const Heading = ({ component, content, className }) => {
  switch (component) {
    case "h1":
      return <h1 className={className}> {content} </h1>;
    case "h2":
      return <h2 className={className}> {content} </h2>;
    case "h3":
      return <h3 className={className}> {content} </h3>;
    case "h4":
      return <h4> {content} </h4>;
    default:
      return <h5> {content} </h5>;
  }
};

export default React.memo(Heading);
