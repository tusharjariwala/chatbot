import React from "react";
import { mdiLogout } from "@mdi/js";
import Icon from "@mdi/react";
import { auth } from "../../../lib/firebase";
import { useDispatch, useSelector } from "react-redux";
import { resetUser } from "../../redux/user/user.reducer";
import * as S from "./Styled";

const UserInfo = () => {
  const dispatch = useDispatch();
  const { users, isLoading } = useSelector((state) => state.user);
  if (isLoading) {
    <h1>Loading....</h1>;
  }
  return (
    <S.UserDetail>
      <S.User>
        <S.Img src={users?.user?.avatar || "./avatar.png"} alt="avatar" />
        <div>{users?.user?.username}</div>
      </S.User>
      <S.Button
        onClick={() => {
          auth.signOut();
          dispatch(resetUser());
        }}
      >
        <Icon path={mdiLogout} size={1} />
      </S.Button>
    </S.UserDetail>
  );
};

export default UserInfo;
