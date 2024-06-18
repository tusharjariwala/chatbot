import React from "react";
import * as S from "./Styled";
import UserInfo from "./UserInfo";
import ChatList from "./ChatList";
const Lists = () => {
  return (
    <S.Lists className="Lists">
      <UserInfo />
      <ChatList />
    </S.Lists>
  );
};

export default Lists;
