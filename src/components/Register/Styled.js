import styled from "styled-components";

export const FormWrapper = styled.div`
  background-color: white;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: 0 3px 6px rgb(140 149 159 / 15%);
  min-height: 250px;
  min-width: 400px;
  color: black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const FormContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
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
  font-weight: bold;
  font-size: 24px;
`;
export const Title = styled.span`
  color: #5d5b8d;
  font-size: 12px;
`;
export const Input = styled.input`
  padding: 15px;
  border: 1px solid #dddddd35;
  border-radius: 14px;
  &::placeholder {
    color: rgb(175, 175, 175);
  }
`;

export const FileInput = styled.input`
  padding: 15px;
  border: 1px solid #dddddd35;
  border-radius: 14px;
  display: none;
`;
export const Button = styled.button`
  background-color: #5183fe;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
export const Link = styled.a`
  color: #5d5b8d;
  margin-top: 10px;
  cursor: pointer;
`;
export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #8da4f1;
  font-size: 12px;
  cursor: pointer;
`;
