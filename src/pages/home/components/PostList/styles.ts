import styled from "styled-components";

export const PostListContainer = styled.div`
    margin-top: 2.75rem;
    padding-bottom: 7rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;