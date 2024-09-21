import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ButtonInputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    bordered,
    backgroundColorInput = "#fff",
    backgroundColorButton = "#fff",
  } = props;

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "510px " }}>
        <InputComponent
          size={size}
          placeholder={placeholder}
          border={bordered}
          style={{ backgroundColor: backgroundColorInput }}
        />
      </div>
      <div>
        <ButtonComponent
          size={size}
          styleButton={{
            backgroundColor: backgroundColorButton,
            border: !bordered && "none",
          }}
          icon={<SearchOutlined bordered={false} />}
          textButton={textButton}
        />
      </div>
    </div>
  );
};

export default ButtonInputSearch;
