import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 80px);
`;

export const Title = styled.h1`
  font-size: 70px;
  color: ${(p) => p.theme.textColor};
`;
