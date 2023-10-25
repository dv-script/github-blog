import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProfileCardContainer = styled.div`
    position: relative;
    display: flex;
    gap: 2rem;
    justify-content: center;
    padding: 2rem 2.5rem;
    border-radius: 10px;
    background-color: ${({ theme }) => theme["base-profile"]};
    margin-top: -86px;
    overflow: hidden;
    max-width: 800px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        padding: 3rem 1rem;
    }
`;

export const ProfileCardImageContainer = styled.div`
    width: 148px;
    height: 148px;
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

export const ProfileCardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    display: flex;
    gap: 1.5rem;

    @media screen and (max-width: 768px) {
       flex-direction: column;
    }
`;

export const ProfileCardInfoContainer = styled.div`
    color: ${({ theme }) => theme["base-label"]};
    display: flex;
    gap: 0.5rem;
    align-items: center;
`;

export const ProfileCardInfo = styled.span`
    color: ${({ theme }) => theme["base-subtitle"]};
    white-space: nowrap;
`;

export const ProfileCardLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme["blue"]};
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75rem;
    position: relative;
    
    &:after{
        content: "";
        width: 0;
        height: 1.5px;
        background-color: ${({ theme }) => theme["blue"]};
        position: absolute;
        bottom: -2px;
        transition: 0.2s;
    }
    
    &:hover {
        &:after {
            width: 100%;       
        }
    }

   
`;