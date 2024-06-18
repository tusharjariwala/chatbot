import styled from "styled-components";

export const ChatList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
export const SearchBar = styled.div`
  display: flex;
  border: 1;
  padding: 10px;
  gap: 10px;
  justify-content: space-between;
`;
export const Input = styled.input`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  width: 100%;
  margin: 0px 10px;
`;
export const Plus = styled.div`
  background-color: rgba(17, 25, 40, 0.5);
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
`;
export const Search = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: rgba(17, 25, 40, 0.5);
  flex: 1;
  padding: 0px 10px;
`;
export const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
export const Item = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 20px 0px;
  border-bottom: 1px solid #dddddd35;
`;
export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Items = styled.div`
  overflow-y: auto;
  flex: 1;
`;
