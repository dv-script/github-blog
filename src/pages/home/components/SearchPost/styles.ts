import styled from "styled-components";

export const SearchPostContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 4.5rem;
    max-width: 800px;
`;

export const SearchPostHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SearchPostTitle = styled.h2`
    font-size: 1.25rem;
    font-weight: bold;
    color: ${({ theme }) => theme["base-subtitle"]};
`;

export const SearchPostResults = styled.span`
    color: ${({ theme }) => theme["base-span"]};
    font-size: 0.875rem;
`;

export const SearchPostInput = styled.input`
    background-color: ${({ theme }) => theme["base-input"]};
    border: 1px solid ${({ theme }) => theme["base-border"]};
    border-radius: 6px;
    padding: 0.75rem 1rem;
    color: ${({ theme }) => theme["base-text"]};
`;