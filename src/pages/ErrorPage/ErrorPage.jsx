import { Container, Title } from './ErrorPage.styled';
import HeaderForUnlogged from '../../components/HeaderForUnlogged/HeaderForUnlogged';

const ErrorPage = () => {
  return (
    <>
    < HeaderForUnlogged/>
      <Container>
        <Title>404</Title>
      </Container>
     </>
  );
};

export default ErrorPage;
