import styled from "styled-components";

export const Chat = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
export const Top = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dddddd35;
`;
export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Icon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Center = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
  max-height: 450px;
  overflow-y: auto;
  padding: 20px;
`;
export const Bottom = styled.div`
  margin-top: auto;
  padding: 15px;
  display: flex;
  gap: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.125);
  justify-content: space-between;
`;

export const Button = styled.button`
  background-color: #5183fe;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
export const Input = styled.input`
  flex: 1;
  background-color: rgba(17, 25, 40, 0.5);
  border: none;
  outline: none;
  color: white;
  border-radius: 10px;
  font-size: 16px;
  padding: 10px;
`;
export const Image = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Message = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Profile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Text = styled.p`
  padding: 10px;
  border-radius: 0px 10px 10px 10px;
  background: white;
  color: black;
`;

export const OwnMessage = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Para = styled.div`
  background-color: #5183fe;
  border-radius: 0px 10px 10px 10px;
  padding: 10px;
  color: white;
`;
