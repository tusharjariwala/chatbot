import React from "react";
import UserInfo from "./UserInfo";
import ChatList from "./ChatList";
import * as S from "./Styled";
const Lists = () => {
  return (
    <S.Lists>
      <UserInfo />
      <ChatList />
    </S.Lists>
  );
};

export default Lists;
