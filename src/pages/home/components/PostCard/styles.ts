import styled from "styled-components";

export const PostCardContainer = styled.div`
    max-height: 280px;
    overflow: hidden;
    background-color: ${({ theme }) => theme["base-post"]};
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 2rem;
    border-radius: 10px;
    cursor: pointer;
`;

export const PostCardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`;

export const PostCardTitle = styled.h2`
    font-size: 1.25rem;
    font-weight: bold;
    color: ${({ theme }) => theme["base-title"]};
`;

export const PostCardDate = styled.span`
    font-size: 0.875rem;
    white-space: nowrap;
    color: ${({ theme }) => theme["base-span"]};
`;

export const PostCardContent = styled.div`
    overflow: hidden;
    color: ${({ theme }) => theme["base-text"]};
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;