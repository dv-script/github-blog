import styled from "styled-components";

export const PostNotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    position: relative;
    padding: 2rem 2.5rem;
    border-radius: 10px;
    background-color: ${({ theme }) => theme["base-profile"]};
    color: ${({ theme }) => theme["white"]};
    margin-top: -86px;
    max-width: 800px;
`;

export const PostNotFoundTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
`;

export const PostNotFoundText = styled.p`
    font-size: 1rem;
    margin: 0;
`;