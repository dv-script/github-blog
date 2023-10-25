import styled from "styled-components";
import { Link } from 'react-router-dom';

export const PostHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 2rem 2.5rem;
    border-radius: 10px;
    position: relative;
    background-color: ${({ theme }) => theme["base-profile"]};
    margin-top: -86px;
    overflow: hidden;
    max-width: 800px;
`;

export const PostHeaderButtonContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const PostHeaderBackButton = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.blue};
    font-size: 0.75rem;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
        transition: 0.3s;
        color: ${({ theme }) => theme["base-title"]};
    }
`;

export const PostHeaderGithubButton = styled(PostHeaderBackButton)`
    position: relative;

    &:after {
        content: '';
        height: 1.5px;
        width: 0;
        background-color: ${({ theme }) => theme.blue};
        position: absolute;
        transition: 0.3s;
        bottom: -2px;
        left: 0;

    }
    &:hover {
        color: ${({ theme }) => theme.blue};

        &:after {
            width: 100%;
        }
    }
`;

export const PostHeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
`;

export const PostHeaderTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme["base-title"]};
`;

export const PostHeaderInfoContainer = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
`;

export const PostHeaderInfo = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: ${({ theme }) => theme["base-label"]};
`;

export const PostHeaderInfoText = styled.span`
    font-size: 0.875rem;
    color: ${({ theme }) => theme["base-span"]};
`;