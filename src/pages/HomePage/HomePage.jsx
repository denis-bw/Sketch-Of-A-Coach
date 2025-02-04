import React from 'react';
import {
  Container,
  Content,
  Title,
  Description,
  ButtonsContainer,
  StyledLink,
} from './HomePage.styled';
import HeaderForUnlogged from '../../components/HeaderForUnlogged/HeaderForUnlogged';

const HomePage = () => {
  return (
    <>
    <HeaderForUnlogged/>
    
    <Container>
      <Content>
          
        <Title>Ласкаво просимо!</Title>
        <Description>
          Приєднуйтесь до нашої спільноти та відкривайте для себе нові можливості. 
          Почніть свою подорож прямо зараз!
        </Description>
        
        <ButtonsContainer>
          <StyledLink to="/login" className="secondary">
            Увійти
          </StyledLink>
          <StyledLink to="/register" className="primary">
            Реєстрація
          </StyledLink>
        </ButtonsContainer>
      </Content>
      </Container>
  </>
  );
};

export default HomePage;