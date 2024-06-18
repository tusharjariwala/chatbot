import styled from "styled-components";
import UIcon from "@mdi/react";
export const UserDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
export const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
export const User = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const Icon = styled(UIcon)`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`;
export const Button = styled.button`
  background-color: #5183fe;
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
  padding: 10px;
`;
