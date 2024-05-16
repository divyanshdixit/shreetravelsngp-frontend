import React from "react";
import Button from "@mui/material/Button";
// import { decrement } from "../redux/example/exampleSlice";
// import { useDispatch } from "react-redux";

const CustomButton = ({ text, className, onclick }) => {
  // const dispatch = useDispatch();

  return (
    <Button
      variant="contained"
      size="large"
      className={`${className} demo_btn`}
      onClick={onclick}
    >
      {text}
    </Button>
  );
};

export default React.memo(CustomButton);
