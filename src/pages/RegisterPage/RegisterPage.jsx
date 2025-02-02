import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthorizationUser } from '../../redux/auth/authOperations';  
import {
  Container,
  FormCard,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  RegisterButton,
  BottomText,
  StyledLink,
  PasswordRequirement,
  RequirementItem,
  ErrorText,
  TogglePasswordButton,
  Header,
  Logo,
} from './RegisterPage.styled';
import BtnTheme from '../../components/BtnTheme/BtnTheme';
import { clearError } from '../../redux/auth/authSlice'; 

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { error, isLoading } = useSelector((state) => state.auth);  
  const [showPassword, setShowPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    if (error) {dispatch(clearError());}
  }, [dispatch]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Викликаємо action для реєстрації
    dispatch(fetchAuthorizationUser(formData))
      .then(() => {
        // Дії після успішної реєстрації (можна перенаправити, наприклад)
      })
      .catch((err) => {
        console.error("Реєстрація не вдалася: ", err);
      });
  };

  return (
    <>
      <Header>
        <Logo to={"/"}>Coach's Sketch</Logo> 
        <BtnTheme/>
      </Header>

    <Container>
      <FormCard>
        <Title>Реєстрація</Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Ім'я</Label>
            <Input 
              id="name" 
              name="username" 
              type="text" 
              value={formData.name} 
              onChange={handleChange}
              minLength={3}
              maxLength={25}
              placeholder="Введіть ім'я"
              required
                
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
              maxLength={40}
              placeholder="Введіть Email"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Пароль</Label>
            <div style={{ position: 'relative' }}>
              <Input 
                id="password" 
                name="password" 
                type={showPassword ? 'text' : 'password'} 
                value={formData.password} 
                onChange={handleChange} 
                placeholder="Введіть пароль"
                required
                minLength={6}  
                maxLength={20}
              />
              <TogglePasswordButton type="button" onClick={() => setShowPassword(prev => !prev)}>
                {showPassword ? 'Сховати' : 'Показати'}
              </TogglePasswordButton>
            </div>
            <PasswordRequirement>
              <RequirementItem>Мінімум 6 символів</RequirementItem>
            </PasswordRequirement>
          </FormGroup>

          <RegisterButton type="submit" disabled={isLoading}>
            {isLoading ? 'Завантаження...' : 'Зареєструватися'}
          </RegisterButton>

          {error && <ErrorText > {error}</ErrorText>} 
        </Form>

        <BottomText>
          Вже маєте акаунт? <StyledLink to="/login">Увійти</StyledLink>
        </BottomText>
      </FormCard>
      </Container>
    </>
  );
};

export default RegisterPage;
