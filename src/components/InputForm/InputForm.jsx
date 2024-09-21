import React from "react";
import { WrapperInputStyle } from "./style";

const InputForm = (props) => {
  const { placeholder = "nhập", ...rests } = props;
  const handleOnchangeInput = (e) => {
    props.handleOnchange(e.target.value);
    // console.log("value", e.target.value);
  };
  return (
    <div>
      <WrapperInputStyle
        placeholder={placeholder}
        value={props.value}
        {...rests}
        onChange={handleOnchangeInput}
      />
    </div>
  );
};

export default InputForm;
