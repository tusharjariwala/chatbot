import React from "react";
import { mdiLogout } from "@mdi/js";
import Icon from "@mdi/react";
import * as S from "./Styled";

const UserInfo = () => {
  return (
    <S.UserDetail>
      <S.User>
        <S.Img src="./avatar.png" alt="avatar" />
        <div>Jane</div>
      </S.User>
      <S.Button>
        <Icon path={mdiLogout} size={1} />
      </S.Button>
    </S.UserDetail>
  );
};

export default UserInfo;
