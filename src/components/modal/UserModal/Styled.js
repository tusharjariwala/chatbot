import styled from "styled-components";

export const AddUser = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;
export const Form = styled.form`
  display: flex;
  gap: 20px;
`;

export const Input = styled.input`
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 10px;
  background-color: #ececec;
`;

export const Button = styled.button`
  background-color: #7b91d7;
  border-radius: 10px;
  border: none;
  color: white;
  cursor: pointer;
  padding: 10px;
`;
export const User = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
export const Detail = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
`;
export const Image = styled.img`
  border-radius: 50%;
  height: 50px;
  object-fit: cover;
  width: 50px;
`;
