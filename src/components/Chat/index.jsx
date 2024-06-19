import React, { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import Icon from "@mdi/react";
import {
  mdiCameraOutline,
  mdiEmoticonExcitedOutline,
  mdiImageOutline,
  mdiMicrophone,
  mdiPhoneOutline,
  mdiSend,
  mdiVideoOutline,
} from "@mdi/js";
import * as S from "./Styled";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const endRef = useRef(null);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, []);
  return (
    <S.Chat>
      <S.Top>
        <S.User>
          <S.Img src="./avatar.png"></S.Img>
          <div>
            <div>Name</div>
            <S.Description>description</S.Description>
          </div>
        </S.User>
        <S.Icon>
          <S.IconButton>
            <Icon path={mdiPhoneOutline} size={1} />
          </S.IconButton>
          <S.IconButton>
            <Icon path={mdiVideoOutline} size={1} />
          </S.IconButton>
        </S.Icon>
      </S.Top>
      <S.Center>
        <S.Message>
          <S.Img src="./avatar.png" alt="avatar" />
          <S.Text>Hi,How Are You</S.Text>
        </S.Message>
        <S.OwnMessage>
          <S.Img src="./avatar.png" alt="avatar" />
          <S.Para>Hey How are You</S.Para>
        </S.OwnMessage>
        <S.Message>
          <S.Img src="./avatar.png" alt="avatar" />
          <S.Text>Hi,How Are You</S.Text>
        </S.Message>
        <div ref={endRef}></div>
      </S.Center>

      <S.Bottom>
        <S.Image>
          <Icon path={mdiImageOutline} size={1.5} />
          <Icon path={mdiCameraOutline} size={1.5} />
          <Icon path={mdiMicrophone} size={1.5} />
        </S.Image>
        <S.Input type="text" placeholder="Type a message..." />
        <S.DivWrapper>
          <S.Emoji>
            <Icon
              path={mdiEmoticonExcitedOutline}
              size={1.5}
              onClick={() => setOpen(!open)}
            />
            <S.Picker>
              <EmojiPicker open={open} onEmojiClick={handleEmoji} />
            </S.Picker>
          </S.Emoji>
          <S.Button>
            <Icon path={mdiSend} size={1} />
          </S.Button>
        </S.DivWrapper>
      </S.Bottom>
    </S.Chat>
  );
};

export default Chat;
