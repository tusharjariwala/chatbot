import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Icon from "@mdi/react";
import { mdiMagnify, mdiMinus, mdiPlus } from "@mdi/js";
import AddUserModal from "../../modal/UserModal";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import * as S from "./Styled";

const ChatList = () => {
  const { users } = useSelector((state) => state.user);
  const [addMode, setAddMode] = useState(false);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "userchats", users.user.id),
      async (res) => {
        if (res.data()) {
          const items = res.data().chats;
          const promise = items.map(async (item) => {
            const userDocRef = doc(db, "users", item.receiverId);
            const userDocSnap = await getDoc(userDocRef);
            const user = userDocSnap.data();
            return {
              ...item,
              user,
            };
          });
          const chatData = await Promise.all(promise);
          setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
        }
      }
    );
    return () => unSub();
  }, [users?.user?.id]);

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
        {chats.length > 0
          ? chats.map((items) => (
              <S.Items>
                <S.Item>
                  <S.Img
                    src={items.user.avatar || "./avatar.png"}
                    alt="avatar"
                  />
                  <S.Detail>
                    <div>{items.user.username}</div>
                    <S.Description>{items.user.lastMessage}</S.Description>
                  </S.Detail>
                </S.Item>
                <S.Line />
              </S.Items>
            ))
          : ""}
      </S.ChatList>
      {addMode && (
        <>
          <S.Overlay onClick={() => setAddMode(false)} />
          <AddUserModal />
        </>
      )}
    </>
  );
};

export default ChatList;
