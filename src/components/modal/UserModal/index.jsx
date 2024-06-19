import React from "react";
import * as S from "./Styled";
const AddUserModal = () => {
  return (
    <S.AddUser>
      <S.Form>
        <S.Input type="text" placeholder="user name" name="user name" />
        <S.Button>Search</S.Button>
      </S.Form>
      <S.User>
        <S.Detail>
          <S.Image src="./avatar.png" alt="" />
          <span>Jane Doe</span>
        </S.Detail>
        <S.Button>Add User</S.Button>
      </S.User>
    </S.AddUser>
  );
};

export default AddUserModal;
