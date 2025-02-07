import { Container, Title, ContainerErrPage } from './ErrorPage.styled';
import HeaderForUnlogged from '../../components/HeaderForUnlogged/HeaderForUnlogged';

const ErrorPage = () => {
  return (
    <ContainerErrPage>
    < HeaderForUnlogged/>
      <Container>
        <Title>404</Title>
      </Container>
     </ ContainerErrPage>
  );
};

export default ErrorPage;
