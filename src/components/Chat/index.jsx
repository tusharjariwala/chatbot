import React from "react";
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
      </S.Center>

      <S.Bottom>
        <S.Image>
          <Icon path={mdiImageOutline} size={1.5} />
          <Icon path={mdiCameraOutline} size={1.5} />
          <Icon path={mdiMicrophone} size={1.5} />
        </S.Image>
        <S.Input type="text" placeholder="Type a message..." />
        <S.DivWrapper>
          <Icon path={mdiEmoticonExcitedOutline} size={1.5} />
          <S.Button>
            <Icon path={mdiSend} size={1} />
          </S.Button>
        </S.DivWrapper>
      </S.Bottom>
    </S.Chat>
  );
};

export default Chat;
