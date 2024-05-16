import React from "react";

const Title = ({ title, className }) => {
  return <p className={className}> {title} </p>;
};

export default React.memo(Title);
