import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    //definindo cores
    --purple-300: #EFCFA0;
    --purple-600: #E1A140;
    --purple-900: #532200;

    --font-black: #1c1c1c;
    --font-white: #fff;
}

* { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    // conforme tamanho da tela do usuario
    // 1rem = 16px
    @media (max-width: 1080px) {
        font-size: 93,75%; //=15px
    }
    @media(max-width: 720px) {
        font-size: 87.5%; //=14px
    }
}
`;
