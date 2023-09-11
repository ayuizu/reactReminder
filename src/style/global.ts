import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    //definindo cores
    --purple-300: rgba(85,49,255,0.25);
    --purple-600: #5531FF;
    --purple-900: #120057;

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
