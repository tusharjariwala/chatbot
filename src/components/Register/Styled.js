import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormWrapper = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: 0 3px 6px rgb(140 149 159 / 15%);
  color: black;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 250px;
  min-width: 400px;
  padding: 20px;
`;

export const FormContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
export const Logo = styled.span`
  color: #5d5b8d;
  font-size: 24px;
  font-weight: bold;
`;
export const Title = styled.span`
  color: #5d5b8d;
  font-size: 12px;
`;
export const Input = styled.input`
  border-radius: 14px;
  border: 1px solid #9f999935;
  padding: 15px;
  &::placeholder {
    color: rgb(175, 175, 175);
  }
`;

export const FileInput = styled.input`
  border-radius: 14px;
  border: 1px solid #dddddd35;
  display: none;
  padding: 15px;
`;
export const Button = styled.button`
  background-color: #7b91d7;
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
  padding: 10px 20px;
`;
export const ULink = styled(Link)`
  color: #5d5b8d;
  cursor: pointer;
  margin-top: 10px;
`;
export const Label = styled.label`
  align-items: center;
  color: #8da4f1;
  cursor: pointer;
  display: flex;
  font-size: 12px;
  gap: 10px;
`;

export const Image = styled.img`
  border-radius: 10px;
  height: 50px;
  object-fit: cover;
  opacity: 0.6;
  width: 50px;
`;
