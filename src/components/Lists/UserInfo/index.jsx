import React from "react";
import { mdiDotsHorizontal } from "@mdi/js";

import * as S from "./Styled";

const UserInfo = () => {
  return (
    <S.UserDetail>
      <S.User>
        <S.Img src="./avatar.png" alt="avatar" />
        <div>Jane</div>
      </S.User>
      <S.Button>Logout</S.Button>
    </S.UserDetail>
  );
};

export default UserInfo;
