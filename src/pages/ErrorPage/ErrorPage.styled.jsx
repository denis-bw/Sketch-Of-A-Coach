import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-grow: 1;
`;

export const Title = styled.h1`
  font-size: 70px;
  color: ${(p) => p.theme.textColor};
`;


export const ContainerErrPage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
` 
