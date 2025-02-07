import styled from "styled-components";

export const GoogleButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 0.875rem;
    font-size: 1rem;
    font-weight: 500;

    color: ${({ theme }) => theme.textBlack}; 
    background-color:  ${({ theme }) => theme.ContainerBGColor};
    border: 1.6px solid ${({ theme }) => theme.textGray};
    border-radius: 0.5rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    width: 100%;
    margin-top: 16px;
    margin-bottom: 10px;
    height: 46px;
    &:hover {  
        background-color:  ${({ theme }) => theme.BgActiveLink}; 
        border-color: ${({ theme }) => theme.BgActiveLink};
        /* background-color:  ${({ theme }) => theme.BgActiveLinkHover};  */
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px ${({ theme }) => `rgba(${parseInt(theme.lightGreen.slice(1, 3), 16)}, ${parseInt(theme.lightGreen.slice(3, 5), 16)}, ${parseInt(theme.lightGreen.slice(5, 7), 16)}, 0.5)`};
        
    }

    svg {
        width: 20px;
        height: 20px;
    }
`;
