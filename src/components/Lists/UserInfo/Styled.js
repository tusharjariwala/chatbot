import UIcon from "@mdi/react";
import styled from "styled-components";

export const UserDetail = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
export const Img = styled.img`
  border-radius: 50%;
  height: 40px;
  object-fit: cover;
  width: 40px;
`;
export const User = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
`;
export const Icon = styled(UIcon)`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 10px;
`;
export const Button = styled.button`
  align-items: center;
  background-color: #7b91d7;
  border-radius: 50%;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  padding: 10px;
`;
