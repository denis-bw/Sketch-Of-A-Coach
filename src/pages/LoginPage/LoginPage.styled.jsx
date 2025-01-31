import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  padding-top: 60px;
  background-color: ${({ theme }) => theme.mainBGColor};
  transition: all 0.2s ease-in-out;
  @media (max-width: 640px) {
    padding: 40px; 
  }
`;

export const FormCard = styled.div`
  width: 100%;
  max-width: 28rem;
  background-color: ${({ theme }) => theme.ContainerBGColor};
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  color: ${({ theme }) => theme.textBlack};
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textBlack};
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({ theme }) => theme.textGray};
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.ContainerBGColor};
  color: ${({ theme }) => theme.textBlack};
  transition: all 0.2s ease-in-out;
  
&:focus {
    outline: none;
    border-color: ${({ theme }) => theme.lightGreen};
    box-shadow: 0 0 0 2px ${({ theme }) => `rgba(${parseInt(theme.lightGreen.slice(1, 3), 16)}, ${parseInt(theme.lightGreen.slice(3, 5), 16)}, ${parseInt(theme.lightGreen.slice(5, 7), 16)}, 0.5)`};
}

&::placeholder {
    color: ${({ theme }) => theme.textGray};
}

&:-webkit-autofill,
&:-webkit-autofill:hover,
&:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.ContainerBGColor} inset;
  -webkit-text-fill-color: ${({ theme }) => theme.textBlack};
  transition: background-color 5000s ease-in-out 0s;
  border-color: ${({ theme }) => theme.lightGreen};
}

&:valid {
    border-color: ${({ theme }) => theme.lightGreen};
}

&:not(:placeholder-shown):not(:-webkit-autofill):invalid {
    border-color: ${({ theme }) => theme.red};
}

&:focus:not(:placeholder-shown):not(:-webkit-autofill):invalid {
    box-shadow: 0 0 0 2px ${({ theme }) => `rgba(${parseInt(theme.red.slice(1, 3), 16)}, ${parseInt(theme.red.slice(3, 5), 16)}, ${parseInt(theme.red.slice(5, 7), 16)}, 0.5)`};
}
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 0.875rem;
  background-color: ${({ theme }) => theme.greenMain};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.darkGreen};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const BottomText = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.textGray};
  font-size: 0.875rem;
`;

export const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.greenMain};
  text-decoration: none;
  font-weight: 500;
  margin-left: 0.5rem;
  
  &:hover {
    color: ${({ theme }) => theme.darkGreen};
    text-decoration: underline;
  }
`;

export const ForgotPassword = styled(NavLink)`
  color: ${({ theme }) => theme.textGray};
  text-decoration: none;
  font-size: 0.875rem;
  text-align: right;
  margin-top: -1rem;
  display: block;
  
  &:hover {
    color: ${({ theme }) => theme.greenMain};
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color:  ${({ theme }) => theme.ContainerBGColor};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled(NavLink)`
  font-size: 24px;
  font-weight: bold;
  color:  ${({ theme }) => theme.greenMain};
`;

export const ErrorText = styled.div`
  color: ${({ theme }) => theme.red};
`;

export const TogglePasswordButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 14px;
  color: ${({ theme }) => theme.iconColor};
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;