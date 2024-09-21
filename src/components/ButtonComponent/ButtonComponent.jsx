import React from "react";
import { Button } from "antd";

const ButtonComponent = ({
  size,
  styleButton,
  styleTextButton,
  textButton,
  disabled,
  ...rests
}) => {
  return (
    <div>
      <Button
        style={{
          ...styleButton,
          background: disabled ? "#ccc" : styleButton.background,
        }}
        size={size}
        {...rests}
      >
        <span style={styleTextButton}>{textButton}</span>
      </Button>
    </div>
  );
};

export default ButtonComponent;
