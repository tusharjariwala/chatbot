import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Styled";

const Login = () => {
  const navigate = useNavigate();
  return (
    <S.FormContainer>
      <S.FormWrapper>
        <S.Logo>Chat Bot</S.Logo>
        <S.Title>Login</S.Title>
        <S.Form>
          <S.Input type="email" placeholder="email" />
          <S.Input type="password" placeholder="password" />
          <S.Button>Sign In</S.Button>
        </S.Form>
        <S.Link onClick={() => navigate("/register")}>
          You don't have an account? Register
        </S.Link>
      </S.FormWrapper>
    </S.FormContainer>
  );
};

export default Login;
