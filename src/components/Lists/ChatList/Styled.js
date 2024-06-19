import styled from "styled-components";

export const ChatList = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SearchBar = styled.div`
  border: 1;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  padding: 10px;
`;
export const Input = styled.input`
  background-color: transparent;
  border: none;
  color: black;
  margin: 0px 10px;
  outline: none;
  width: 100%;
`;
export const Plus = styled.div`
  background-color: #ececec;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  padding: 10px;
`;
export const Search = styled.div`
  align-items: center;
  background-color: #ececec;
  border-radius: 10px;
  display: flex;
  flex: 1;
  padding: 0px 10px;
`;
export const Img = styled.img`
  border-radius: 50%;
  height: 45px;
  object-fit: cover;
  width: 45px;
`;
export const Item = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
  padding: 10px;
`;
export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const Items = styled.div`
  flex: 1;
  overflow-y: auto;
`;
export const Description = styled.div`
  font-size: 12px;
  opacity: 0.5;
`;

export const Line = styled.div`
  border-bottom: 1px solid #efeff4;
`;
