import styled from "styled-components";

export const PostContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2.5rem 2rem;
  border-radius: 10px;
  overflow: hidden;
  max-width: 800px;
  color: ${({ theme }) => theme["base-text"]};

  a {
    color: ${({ theme }) => theme["blue"]};
  }

  img {
    max-width: 100%;
    object-position: center;
    object-fit: cover;
    border-radius: 5px;
  }

  ul {
    list-style-position: inside;
  }
  
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  h1::after {
    content: "";
    display: block;
    width: 100%;
    height: 1.5px;
    background-color: ${({ theme }) => theme["base-border"]};
    margin-top: 0.5rem;
  }

  h2, h3, h4, h5, h6 {
    font-size: 1.25rem;
    font-weight: bold;
  }

  code {
    background-color: ${({ theme }) => theme["base-post"]};
    padding: 1rem;
    border-radius: 5px;
  }

`;
