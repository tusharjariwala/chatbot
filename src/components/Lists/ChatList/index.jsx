import { mdiMagnify, mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import * as S from "./Styled";
const ChatList = () => {
  return (
    <S.ChatList>
      <S.SearchBar className="search">
        <S.Search>
          <Icon path={mdiMagnify} size={1} color={"white"} />
          <S.Input type="text" />
        </S.Search>
        <S.Plus>
          <Icon path={mdiPlus} size={1} color={"white"} />
        </S.Plus>
      </S.SearchBar>
      <S.Items>
        <S.Item>
          <S.Img src="./avatar.png" alt="avatar" />
          <S.Detail>
            <div>username</div>
            <div>description</div>
          </S.Detail>
        </S.Item>
        <S.Item>
          <S.Img src="./avatar.png" alt="avatar" />
          <S.Detail>
            <div>username</div>
            <div>description</div>
          </S.Detail>
        </S.Item>
        <S.Item>
          <S.Img src="./avatar.png" alt="avatar" />
          <S.Detail>
            <div>username</div>
            <div>description</div>
          </S.Detail>
        </S.Item>
        <S.Item>
          <S.Img src="./avatar.png" alt="avatar" />
          <S.Detail>
            <div>username</div>
            <div>description</div>
          </S.Detail>
        </S.Item>
      
        
      </S.Items>
    </S.ChatList>
  );
};

export default ChatList;
