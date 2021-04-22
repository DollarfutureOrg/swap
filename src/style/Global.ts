import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    background-image: url(https://i.ibb.co/y8PVSnZ/IMG-20210404-090954-688.jpg);
    background-blend-mode: multiply;

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
