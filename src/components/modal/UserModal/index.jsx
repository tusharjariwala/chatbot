import React, { useEffect, useState } from "react";
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
  const [filterData, setFilterData] = useState([]);
  const [allData, setAllData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username } = Object.fromEntries(formData);
    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("username", "==", username));
      const querySnapShot = await getDocs(q);

      if (!querySnapShot.empty) {
        const saveFirebaseTodos = [];
        querySnapShot.forEach((doc) => {
          if (!filterData.includes(doc.data().id)) {
            saveFirebaseTodos.push(doc.data());
          }
        });
        setAllData(saveFirebaseTodos);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleUser = async () => {
      try {
        const userRef = collection(db, "users");
        const querySnapShot = await getDocs(userRef);

        const userChat = collection(db, "userchats");
        const userDetails = await getDocs(userChat);

        const array = [];
        if (!userDetails.empty) {
          userDetails.forEach((doc) => {
            doc.data().chats.forEach((user) => {
              array.push(user.receiverId);
            });
          });
        }
        if (!querySnapShot.empty) {
          const saveFirebaseTodos = [];
          querySnapShot.forEach((doc) => {
            if (!array.includes(doc.data().id)) {
              if (doc.data().id !== users.user.id) {
                saveFirebaseTodos.push(doc.data());
              }
            }
          });

          setAllData(saveFirebaseTodos);
        }
        setFilterData(array);
      } catch (error) {
        console.log(error);
      }
    };
    handleUser();
  }, [users.user.id]);

  const handleAddUser = async (userId) => {
    const chatsRef = collection(db, "chats");
    const userChatsRef = collection(db, "userchats");

    try {
      const newRef = doc(chatsRef);
      await setDoc(newRef, {
        createdAt: serverTimestamp(),
        message: [],
      });
      await updateDoc(doc(userChatsRef, userId), {
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
          receiverId: userId,
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
        {allData.length > 0 ? (
          allData.map((user) => (
            <S.User>
              <S.Detail>
                <S.Image src={user.avatar || "./avatar.png"} alt="" />
                <span>{user.username}</span>
              </S.Detail>
              <S.Button onClick={() => handleAddUser(user.id)}>
                Add User
              </S.Button>
            </S.User>
          ))
        ) : (
          <div style={{ marginTop: "20px" }}>No User Found</div>
        )}
      </S.AddUser>
    </>
  );
};

export default AddUserModal;
