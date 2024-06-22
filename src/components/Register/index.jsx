import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import uploadImage from "../../lib/upload";
import { doc, setDoc } from "firebase/firestore";
import * as S from "./Styled";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState({
    file: "",
    url: "",
  });

  const handleAvatar = (e) => {
    setAvatar({
      file: e.target.files[0],
      url: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleRegister = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const imgUrl = await uploadImage(avatar.file);

      await setDoc(doc(db, "users", response.user.uid), {
        username,
        email,
        avatar: imgUrl,
        id: response.user.uid,
      });
      await setDoc(doc(db, "userchats", response.user.uid), { chats: [] });

      toast.success("User created successfully");
      navigate("/login");
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
        <S.Title>Register</S.Title>
        <S.Form onSubmit={handleRegister}>
          <S.Input type="text" placeholder="user name" name="username" />
          <S.Input type="email" placeholder="email" name="email" />
          <S.Input type="password" placeholder="password" name="password" />
          <S.FileInput type="file" id="file" onChange={handleAvatar} />
          <S.Label htmlFor="file">
            <S.Image src={avatar.url || "./avatar.png"} alt="" />
            <span>Upload Profile</span>
          </S.Label>
          <S.Button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Sign Up"}
          </S.Button>
        </S.Form>
        <p>
          You do have an account? <S.ULink to="/login">Login</S.ULink>
        </p>
      </S.FormWrapper>
    </S.FormContainer>
  );
};

export default Register;
