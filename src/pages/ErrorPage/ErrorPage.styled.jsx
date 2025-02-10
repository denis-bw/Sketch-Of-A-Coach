import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  overflow-y: scroll;
`;

export const Title = styled.h1`
  font-size: 70px;
  color: ${(p) => p.theme.textColor};
  @media (max-width: 640px) {
    font-size: 58px;
  }
`;


export const ContainerErrPage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
` 

export const ImgError = styled.img`
  width: 300px;
  max-height: 300px;
  @media (max-width: 640px) {
    width: 200px;
    max-height: 200px;
  }
`