import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiMagnify, mdiMinus, mdiPlus } from "@mdi/js";
import AddUserModal from "../../modal/UserModal";
import * as S from "./Styled";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  return (
    <>
      <S.ChatList>
        <S.SearchBar>
          <S.Search>
            <Icon path={mdiMagnify} size={1} />
            <S.Input type="text" placeholder="Search..." />
          </S.Search>
          <S.Plus>
            <Icon
              path={addMode ? mdiMinus : mdiPlus}
              size={1}
              onClick={() => setAddMode(!addMode)}
            />
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
      {addMode && <AddUserModal />}
    </>
  );
};

export default ChatList;
