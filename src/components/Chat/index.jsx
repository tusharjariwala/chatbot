import React from "react";
import * as S from "./Styled";
import Icon from "@mdi/react";
import {
  mdiCameraOutline,
  mdiImageOutline,
  mdiMicrophone,
  mdiPhoneOutline,
  mdiVideoOutline,
} from "@mdi/js";
const Chat = () => {
  return (
    <S.Chat>
      <S.Top>
        <S.User>
          <S.Img src="./avatar.png"></S.Img>
          <div>
            <div>Name</div>
            <div>description</div>
          </div>
        </S.User>
        <S.Icon>
          <Icon path={mdiPhoneOutline} size={1} />
          <Icon path={mdiVideoOutline} size={1} />
        </S.Icon>
      </S.Top>
      <S.Center>
        <S.Message>
          <S.Profile src="./avatar.png" alt="avatar" />
          <S.Text>Hi,How Are You</S.Text>
        </S.Message>
        <S.OwnMessage>
          <S.Profile src="./avatar.png" alt="avatar" />
          <S.Para>Hey How are You</S.Para>
        </S.OwnMessage>
        <S.Message>
          <S.Profile src="./avatar.png" alt="avatar" />
          <S.Text>Hi,How Are You</S.Text>
        </S.Message>
      </S.Center>

      <S.Bottom>
        <S.Image>
          <Icon path={mdiImageOutline} size={1} />
          <Icon path={mdiCameraOutline} size={1} />
          <Icon path={mdiMicrophone} size={1} />
        </S.Image>
        <S.Input type="text" placeholder="Type a message..." />
        <S.Button>Send</S.Button>
      </S.Bottom>
    </S.Chat>
  );
};

export default Chat;
