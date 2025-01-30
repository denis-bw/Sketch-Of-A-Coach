import React from 'react';

import {
  Container,
  FormCard,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  LoginButton,
  BottomText,
  StyledLink,
  ForgotPassword,
  Header,
  Logo,
} from './LoginPage.styled';
import BtnTheme from '../../components/BtnTheme/BtnTheme';

const LoginPage = () => {

  return (
    <>
      <Header>
        <Logo to={"/"}>Coach's Sketch</Logo> 
        <BtnTheme/>
      </Header>
      
    <Container>
      <FormCard>
        <Title>Вхід</Title>
        
        <Form >
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Введіть email"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Пароль</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Введіть пароль"
              required
            />
          </FormGroup>

          <ForgotPassword to="/forgot-password">
            Забули пароль?
          </ForgotPassword>

          <LoginButton type="submit">
            Увійти
          </LoginButton>
        </Form>

        <BottomText>
          Немає акаунту?
          <StyledLink to="/register">
            Зареєструватися
          </StyledLink>
        </BottomText>
      </FormCard>
      </Container>
    </>
  );
};

export default LoginPage;