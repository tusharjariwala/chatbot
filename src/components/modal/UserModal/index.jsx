import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../../lib/firebase";
import * as S from "./Styled";

const AddUserModal = () => {
  const { users } = useSelector((state) => state.user);
  const [filterData, setFilterData] = useState(null);
  console.log("users", users);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username } = Object.fromEntries(formData);
    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("username", "==", username));
      const querySnapShot = await getDocs(q);

      if (!querySnapShot.empty) {
        setFilterData(querySnapShot.docs[0].data());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddUser = async () => {
    const chatsRef = collection(db, "chats");
    const userChatsRef = collection(db, "userchats");

    try {
      const newRef = doc(chatsRef);
      await setDoc(newRef, {
        createdAt: serverTimestamp(),
        message: [],
      });
      console.log("filterData", filterData);
      console.log("users.user.id", users.user.id);
      await updateDoc(doc(userChatsRef, filterData.id), {
        chats: arrayUnion({
          chatId: newRef.id,
          lastMessage: "",
          receiverId: users.user.id,
          updatedAt: Date.now(),
        }),
      });

      await updateDoc(doc(userChatsRef, users.user.id), {
        chats: arrayUnion({
          chatId: newRef.id,
          lastMessage: "",
          receiverId: filterData.id,
          updatedAt: Date.now(),
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <S.AddUser>
        <S.Form onSubmit={handleSubmit}>
          <S.Input type="text" placeholder="user name" name="username" />
          <S.Button type="submit">Search</S.Button>
        </S.Form>
        {filterData !== null ? (
          <S.User>
            <S.Detail>
              <S.Image src={filterData.avatar || "./avatar.png"} alt="" />
              <span>{filterData.username}</span>
            </S.Detail>
            <S.Button onClick={handleAddUser}>Add User</S.Button>
          </S.User>
        ) : (
          <></>
        )}
      </S.AddUser>
    </>
  );
};

export default AddUserModal;
