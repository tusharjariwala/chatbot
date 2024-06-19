import React from "react";
import { useNavigate } from "react-router-dom";
import { mdiImageOutline } from "@mdi/js";
import Icon from "@mdi/react";
import * as S from "./Styled";

const Register = () => {
  const navigate = useNavigate();
  return (
    <S.FormContainer>
      <S.FormWrapper>
        <S.Logo>Chat Bot</S.Logo>
        <S.Title>Register</S.Title>
        <S.Form>
          <S.Input type="text" placeholder="user name" />
          <S.Input type="email" placeholder="email" />
          <S.Input type="password" placeholder="password" />
          <S.FileInput type="file" id="file" />
          <S.Label htmlFor="file">
            <S.Image src={"./avatar.png"} alt="" />
            <span>Add an avatar</span>
          </S.Label>
          <S.Button>Sign Up</S.Button>
        </S.Form>
        <S.Link onClick={() => navigate("/login")}>
          You do have an account? Login
        </S.Link>
      </S.FormWrapper>
    </S.FormContainer>
  );
};

export default Register;
