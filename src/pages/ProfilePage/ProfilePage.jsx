import React, { useState } from "react";
import {
  WrapperContentProfile,
  WrapperHeader,
  WrapperInput,
  WrapperLabel,
} from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

const ProfilePage = () => {
  const [email, setEmail] = useState("");
  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };
  const handleUpdate = (e) => {};
  return (
    <div style={{ width: "1270px", margin: "0 auto", height: "500px" }}>
      <WrapperHeader>Thông tin người dùng</WrapperHeader>
      <WrapperContentProfile>
        <WrapperInput>
          <WrapperLabel>Tài khoản </WrapperLabel>
          <InputForm
            style={{ width: "300px" }}
            id="email"
            value={email}
            handleOnchange={handleOnchangeEmail}
          />
        </WrapperInput>
        <WrapperInput>
          <WrapperLabel>Email </WrapperLabel>
          <InputForm
            style={{ width: "300px" }}
            id="email"
            value={email}
            handleOnchange={handleOnchangeEmail}
          />
        </WrapperInput>
        <WrapperInput>
          <WrapperLabel>Password </WrapperLabel>
          <InputForm
            style={{ width: "300px" }}
            id="email"
            value={email}
            handleOnchange={handleOnchangeEmail}
          />
          <ButtonComponent
            onClick={handleUpdate}
            size={40}
            styleButton={{
              height: "30px",
              width: "fit-content",
              border: "1px solid rgb(26, 148, 255)",
              borderRadius: "4px",
              padding: "4px 6px 6px",
            }}
            textButton={"Cập nhật"}
            styleTextButton={{
              color: "rgb(26, 148, 255)",
              fontSize: "15px",
              fontWeight: "700",
            }}
          ></ButtonComponent>
        </WrapperInput>
      </WrapperContentProfile>
    </div>
  );
};

export default ProfilePage;
