import { Container, Title, ContainerErrPage, ImgError } from './ErrorPage.styled';
import HeaderForUnlogged from '../../components/HeaderForUnlogged/HeaderForUnlogged';
import ErrorImg from "../../assets/error.png"; 

const ErrorPage = () => {
  localStorage.removeItem('lastPrivatePath');

  return (
    <ContainerErrPage>
    < HeaderForUnlogged/>
      <Container>
        <Title>Oops 404</Title>
        <ImgError src={ErrorImg} alt="error-img" />
      </Container>
     </ ContainerErrPage>
  );
};

export default ErrorPage;
