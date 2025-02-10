import { useOutletContext } from "react-router-dom";
import { useEffect } from 'react';
import { 
  Container, 
  Card, 
  PhotoContainer, 
  PhotoWrapper, 
  PhotoCircle, 
  ProfileImage, 
  PhotoUploadButton, 
  FormGroup,
  FormRow,
  Label, 
  Input, 
  HiddenInput,
  Button,
  ButtonWrapper,
  WrapperInput,
  CameraIcon,
} from "./MyAccount.styled";
import {CustomDatePicker} from "./CustomDatePicker"
import profilePlaceholder from "../../assets/PlaceholderProfile.jpg"
import { useSelector } from "react-redux";

const MyAccount = () => {
  const { setTitle } = useOutletContext();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    setTitle("Мій акаунт");
  }, [setTitle]);
  
  return (
    <Container>
      <Card>
        <PhotoContainer>
          <PhotoWrapper>
            <PhotoCircle>
              <ProfileImage 
                src={profilePlaceholder}
                alt="Фото профілю"
              />
            </PhotoCircle>
            <PhotoUploadButton htmlFor="photo-upload">
              <CameraIcon />
            </PhotoUploadButton>
            <HiddenInput 
              id="photo-upload" 
              type="file" 
              accept="image/*"
            />
          </PhotoWrapper>
        </PhotoContainer>

        <FormRow>
          
            <FormGroup>
              <WrapperInput>
                <Label htmlFor="username">Ім'я користувача</Label>
                <Input 
                  id="username" 
                  placeholder="Введіть ім'я користувача"
                  value={user.username || "username"} 
                />
               </ WrapperInput>
            </FormGroup>
         
            
          <FormGroup>
            <WrapperInput>
              <Label htmlFor="email">Електронна пошта</Label>
              <Input 
                id="email" 
                type="email" 
                value={user.email || "email"} 
                disabled 
                />
            </WrapperInput>
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <WrapperInput>
              <Label htmlFor="birthdate">Дата народження</Label>
              <CustomDatePicker />
              </WrapperInput>
          </FormGroup>

          <FormGroup>
             <WrapperInput>
              <Label htmlFor="location">Локація</Label>
              <Input 
                id="location" 
                placeholder="Введіть вашу локацію"
                />
              </WrapperInput>
          </FormGroup>
        </FormRow>
        
        <ButtonWrapper>
          <Button type="submit">Зберегти зміни</Button>
        </ButtonWrapper>
        
      </Card>
    </Container>
  );
};

export default MyAccount;