import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
} from './Header.styled';

export const Header = () => {

  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/first">
          <IconWrapper>
          </IconWrapper>
          First
        </StyledLink>
        <StyledLink to="/second">
          <IconWrapper>
          </IconWrapper>
          Second
        </StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
