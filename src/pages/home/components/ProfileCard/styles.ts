import styled from "styled-components";

export const ProfileCardContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    gap: 2rem;
    justify-content: center;
    padding: 2rem 2.5rem;
    border-radius: 10px;
    background-color: ${({ theme }) => theme["base-profile"]};
    margin-top: -84px;    
`;

export const ProfileCardImageContainer = styled.div`
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
    overflow: hidden;
`;

export const ProfileCardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ProfileCardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.5rem;
`;

export const ProfileCardTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const ProfileCardName = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme["base-title"]};
`;

export const ProfileCardBio = styled.p`
    color: ${({ theme }) => theme["base-text"]};
`;

export const ProfileCardWrapper = styled.div`
    width: fit-content;
    display: inline-flex;
    gap: 1.5rem;
`;

export const ProfileCardInfoContainer = styled.div`
    color: ${({ theme }) => theme["base-label"]};
    display: flex;
    gap: 0.5rem;
    align-items: center;
`;

export const ProfileCardInfo = styled.span`
    color: ${({ theme }) => theme["base-subtitle"]};
`;
