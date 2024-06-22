import React from "react";
import Lists from "../Lists";
import Chat from "../Chat";

import * as S from "./Styled";

const Home = () => {
  return (
    <>
      <S.Container>
        <Lists />
        <Chat />
      </S.Container>
    </>
  );
};

export default Home;
