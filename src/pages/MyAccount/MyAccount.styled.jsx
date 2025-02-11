import styled from "styled-components";
import {ReactComponent as OriginalCameraIcon} from "../../assets/CameraIcon.svg"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px'
};

export const Container = styled.form`
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  overflow-y: auto;

  @media (min-width: ${breakpoints.tablet}) {
    align-items: flex-start; 
    height: 100%;
  }
`;

export const Card = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @media (min-width: ${breakpoints.tablet}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 32px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    margin: 0 auto;
    max-width: 100%;
    padding: 52px 82px 52px 82px;
  }
`;

export const FormContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto; 
`;


export const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
`;

export const PhotoWrapper = styled.div`
  position: relative;
  width: 6rem;
  height: 6rem;

  @media (min-width: ${breakpoints.tablet}) {
    width: 8rem;
    height: 8rem;
  }
`;

export const PhotoCircle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.textGray};
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.borderColor};
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PhotoUploadButton = styled.label`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.greenMain};
  color: ${({ theme }) => theme.white};
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: 2px solid ${({ theme }) => theme.white};

  &:hover {
    background-color: ${({ theme }) => theme.darkGreen};
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
  padding: 0;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    gap: 2rem;

    > * {
      flex: 1;
      margin-bottom: 0;
    }
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 0;
  
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({ theme }) => theme.borderColor};
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

  &:disabled {
    background-color: ${({ theme }) => theme.disabledBG};
    cursor: not-allowed;
  }
`;

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`

export const HiddenInput = styled.input`
  display: none;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;

export const Button = styled.button`
  max-width: 500px;
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: ${({ theme }) => theme.greenMain};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.darkGreen};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.lightGreenAlpha};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.disabledBG};
    cursor: not-allowed;
  }
`;

export const CameraIcon = styled(OriginalCameraIcon)`
  fill:  ${(p) => p.theme.white};
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: ${breakpoints.tablet}) {
   width: 18px;
   height: 18px;
  }
`;







export const StyledDatePicker = styled(DatePicker)`
  display: block;
  width: 100%;
 max-width: 100%; 
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({ theme }) => theme.borderColor};
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
`;

export const DatePickerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 8px 4px;
  background: ${({ theme }) => theme.ContainerBGColor};
  border-radius: 12px;
`;


export const DatePickerSelect = styled.select`
  padding: 6px 12px;
  width: 100px;
  border: 1.6px solid ${({ theme }) => theme.greenMain};
  border-radius: 6px;
  background: ${({ theme }) => theme.ContainerBGColor};
  color: ${({ theme }) => theme.textBlack};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.lightGreen};
    box-shadow: 0 0 0 2px ${({ theme }) => `rgba(${parseInt(theme.lightGreen.slice(1, 3), 16)}, ${parseInt(theme.lightGreen.slice(3, 5), 16)}, ${parseInt(theme.lightGreen.slice(5, 7), 16)}, 0.2)`};
  }

  option {
    background: ${({ theme }) => theme.ContainerBGColor};
    color: ${({ theme }) => theme.textBlack};
  }
`;


export const CalendarContainer = styled.div`
  .react-datepicker-wrapper{
    width: 100%;
  }
  .react-datepicker__month-container{
    border-radius: 14px;
  }
  .react-datepicker-popper{
    border-radius: 14px;
  }
  .react-datepicker {
    border-radius: 14px;
    border: 3px solid ${({ theme }) => theme.greenMain};
    background-color: ${({ theme }) => theme.ContainerBGColor};
  }

  .react-datepicker__header {
    background-color: ${({ theme }) => theme.ContainerBGColor};
    border-radius: 14px 14px 0 0 ;
    border-bottom: 1px solid ${({ theme }) => theme.greenMain};
    padding-top: 0;
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select){
    border-radius: 14px 14px 0 0 ;
  }
  .react-datepicker__day-name{
    color: ${({ theme }) => theme.textBlack};
    font-size: 0.9rem;
  }

  .react-datepicker__day:not([aria-disabled=true]):hover, .react-datepicker__month-text:not([aria-disabled=true]):hover, .react-datepicker__quarter-text:not([aria-disabled=true]):hover, .react-datepicker__year-text:not([aria-disabled=true]):hover  {
    border-radius: 50%;
    background-color:  ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.white};
  }
  .react-datepicker__day {
    color: ${({ theme }) => theme.textBlack};
    border-radius: 50%;
    &:hover {
      background-color: ${({ theme }) => theme.darkGreen};
      border-radius: 50%;
    }
  }

  .react-datepicker__day--selected {
    background-color: ${({ theme }) => theme.greenMain};
    color: ${({ theme }) => theme.white};
     border-radius: 50%;

    &:hover {
      background-color: ${({ theme }) => theme.darkGreen};
    }
  }

  .react-datepicker__day--keyboard-selected {
    background-color: ${({ theme }) => theme.lightGreen};
    color: ${({ theme }) => theme.textBlack};
  }

  .react-datepicker__day--outside-month {
    color: ${({ theme }) => theme.textGray};
  }

  .react-datepicker__triangle {
    display: none;
  }
`;













