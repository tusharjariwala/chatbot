import styled from "styled-components";

export const Chat = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  width: 100%;
`;
export const Img = styled.img`
  border-radius: 50%;
  height: 40px;
  object-fit: cover;
  width: 40px;
`;
export const Top = styled.div`
  align-items: center;
  border-bottom: 1px solid #efeff4;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
export const User = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
`;
export const Icon = styled.div`
  align-items: center;
  display: flex;
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
  border-top: 1px solid #efeff4;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  margin-top: auto;
  padding: 15px;
`;

export const Button = styled.button`
  align-items: center;
  background-color: #7b91d7;
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  padding: 10px;
`;
export const Input = styled.input`
  background-color: #ececec;
  border-radius: 10px;
  border: none;
  color: black;
  flex: 1;
  font-size: 16px;
  outline: none;
  padding: 10px;
  &::placeholder {
    color: rgb(175, 175, 175);
  }
`;
export const Image = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 10px;
`;
export const Message = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
`;

export const Text = styled.p`
  background: #ececec;
  border-radius: 0px 10px 10px 10px;
  color: black;
  padding: 10px;
`;

export const OwnMessage = styled.div`
  align-items: center;
  align-self: flex-end;
  display: flex;
  gap: 10px;
`;

export const Para = styled.div`
  background-color: #7b91d7;
  border-radius: 0px 10px 10px 10px;
  color: white;
  padding: 10px;
`;

export const Description = styled.div`
  font-size: 12px;
  opacity: 0.5;
`;

export const DivWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
`;

export const IconButton = styled.button`
  align-items: center;
  background-color: #7b91d7;
  border-radius: 50%;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  padding: 10px;
`;
export const Emoji = styled.div`
  position: relative;
`;
export const Picker = styled.div`
  bottom: 50px;
  left: 0px;
  position: absolute;
`;
