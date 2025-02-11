import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../../redux/auth/authOperations'; 
import { useOutletContext } from "react-router-dom";
import { useNavigationPrompt } from '../../hooks/useNavigationPrompt'; 
import { NavigationPrompt } from '../../components/NavigationPrompt/NavigationPrompt'; 
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
import { CustomDatePicker } from "./CustomDatePicker";
import profilePlaceholder from "../../assets/PlaceholderProfile.jpg";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MyAccount = () => {
  const { setTitle } = useOutletContext();
  const { user, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [username, setUsername] = useState(user.username || "");
  const [location, setLocation] = useState(user.location || "");
  const [birthdate, setBirthdate] = useState(user.dateOfBirth || "");
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  
  const [showPrompt, confirmNavigation, cancelNavigation] = useNavigationPrompt(
    hasUnsavedChanges
  );

  useEffect(() => {
    setTitle("Мій акаунт");
  }, [setTitle]);

  useEffect(() => {
    const hasChanges = 
      username !== (user.username || "") ||
      location !== (user.location || "") ||
      birthdate !== (user.dateOfBirth || "");
    
    setHasUnsavedChanges(hasChanges);
  }, [username, location, birthdate, user]);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = "У вас є незбережені зміни. Ви впевнені, що хочете залишити сторінку?";
        return e.returnValue;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [hasUnsavedChanges]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    if (name === "location") setLocation(value);
    if (name === "birthdate") setBirthdate(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {};

    if (username !== user.username) updatedData.username = username || "";  
    if (location !== user.location) updatedData.location = location || "";  
    if (birthdate !== user.dateOfBirth) updatedData.dateOfBirth = birthdate || null;  

    if (Object.keys(updatedData).length > 0) {
      try {
        const result = await dispatch(updateUserProfile(updatedData)); 

        if (!result.error) {
          setHasUnsavedChanges(false);
          toast.success('Зміни успішно збережено!', {
            position: 'top-right',
            autoClose: 3000,
          });
        }
      } catch (error) {
        toast.error(`Сталася помилка: ${error.message || error}`, {
          position: 'top-right',
          autoClose: 3000,
        });
      }
    } else {
      toast.info('Немає змін для збереження.', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };


  return (
    <>
      <NavigationPrompt 
        isOpen={showPrompt}
        onConfirm={confirmNavigation}
        onCancel={cancelNavigation}
      />
      <ToastContainer />
      <Container onSubmit={handleSubmit}>
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
                  name="username"
                  placeholder="Введіть ім'я користувача"
                  value={username} 
                  maxLength={25}
                  minLength={3}
                  onChange={handleChange} 
                />
              </WrapperInput>
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
                <CustomDatePicker 
                  selectedDate={birthdate} 
                  onDateChange={setBirthdate} 
                />
              </WrapperInput>
            </FormGroup>

            <FormGroup>
              <WrapperInput>
                <Label htmlFor="location">Локація</Label>
                <Input 
                  id="location" 
                  name="location"
                  placeholder="Введіть вашу локацію"
                  value={location}
                  maxLength={50}
                  onChange={handleChange}
                />
              </WrapperInput>
            </FormGroup>
          </FormRow>

          <ButtonWrapper>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Збереження...' : 'Зберегти зміни'}
            </Button>
          </ButtonWrapper>
        </Card>
      </Container>
    </>
  );
};

export default MyAccount;