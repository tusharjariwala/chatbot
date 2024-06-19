import { mdiMagnify, mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import * as S from "./Styled";

const ChatList = () => {
  return (
    <S.ChatList>
      <S.SearchBar>
        <S.Search>
          <Icon path={mdiMagnify} size={1} />
          <S.Input type="text" placeholder="Search..." />
        </S.Search>
        <S.Plus>
          <Icon path={mdiPlus} size={1} />
        </S.Plus>
      </S.SearchBar>
      <S.Items>
        <S.Item>
          <S.Img src="./avatar.png" alt="avatar" />
          <S.Detail>
            <div>John</div>
            <S.Description>description</S.Description>
          </S.Detail>
        </S.Item>
        <S.Line />
        <S.Item>
          <S.Img src="./avatar.png" alt="avatar" />
          <S.Detail>
            <div>John</div>
            <S.Description>description</S.Description>
          </S.Detail>
        </S.Item>
        <S.Line />
        <S.Item>
          <S.Img src="./avatar.png" alt="avatar" />
          <S.Detail>
            <div>John</div>
            <S.Description>description</S.Description>
          </S.Detail>
        </S.Item>
        <S.Line />
        <S.Item>
          <S.Img src="./avatar.png" alt="avatar" />
          <S.Detail>
            <div>John</div>
            <S.Description>description</S.Description>
          </S.Detail>
        </S.Item>
        <S.Line />
      </S.Items>
    </S.ChatList>
  );
};

export default ChatList;
