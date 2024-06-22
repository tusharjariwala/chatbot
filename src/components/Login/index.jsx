import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { auth } from "../../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import * as S from "./Styled";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setLoading(true);
    const { email, password } = Object.fromEntries(formData);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login Successful");
      navigate("/home");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.FormContainer>
      <S.FormWrapper>
        <S.Logo>Chat Bot</S.Logo>
        <S.Title>Login</S.Title>
        <S.Form onSubmit={handleLogin}>
          <S.Input type="email" placeholder="email" name="email" />
          <S.Input type="password" placeholder="password" name="password" />
          <S.Button disabled={loading}>
            {loading ? "Loading..." : "Sign In"}
          </S.Button>
        </S.Form>
        <p>
          You don't have an account? <S.ULink to="/register">Register</S.ULink>
        </p>
      </S.FormWrapper>
    </S.FormContainer>
  );
};

export default Login;
