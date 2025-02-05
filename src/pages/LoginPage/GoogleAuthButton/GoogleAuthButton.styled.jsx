import styled from "styled-components";

export const GoogleButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 16px;
    color: #4b5563; 
    background-color: #ffffff;
    border: 1px solid #d1d5db; 
    border-radius: 6px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    width: 100%;
    margin-top: 16px;
    margin-bottom: 10px;
    height: 44px;
    &:hover {
        background-color: #f9fafb; /* hover:bg-gray-50 */
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5); /* focus:ring-blue-500 */
    }

    svg {
        width: 20px;
        height: 20px;
    }
`;
