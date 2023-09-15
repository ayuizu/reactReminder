import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;

  width: 100%;
  height: 10vh;

  padding: 0 4rem;

  background-color: var(--purple-900);

  //todas as tags img dentro do <contaner>
  > img {
    height: 2.5rem;
  }
  //todas as tags dentro de container e dentro de div : > div > img {
`;
