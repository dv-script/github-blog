import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: none;
        box-shadow: 0 0 0 2px ${(props) => props.theme['base-border']};
    }

    body {
        background-color: ${(props) => props.theme['gray-800']};
        color: ${(props) => props.theme['gray-100']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem Nunito, sans-serif;
    }

    h1, h2, h3, h4, h5, h6, p, span, strong {
        font: 400 1rem Nunito, sans-serif;
        line-height: 160%;
    }
`
