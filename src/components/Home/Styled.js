import styled from "styled-components";

export const Container = styled.div`
  backdrop-filter: blur(19px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: 0 3px 6px rgb(140 149 159 / 15%);
  display: flex;
  flex: 1;
  margin: 10px auto;
  min-height: calc(100vh - 20px);
  max-width: 1200px;
  height: 100%;
`;
