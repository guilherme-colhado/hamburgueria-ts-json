import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body, div, header, section, form, figure, main, p, h1, h2, h3, h4, h5, span, a, ul, li, input, label{
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

    :root{
        font-size: 16px;
        --green450: #27AE601A;
        --green400: #27ae60;
        --green700: #168821;
        --red400: #eb5757;
        --red700: #e60000;
        --yellow: #ffcd07; 
        --gray600: #333333; 
        --gray550: #333333aa;
        --gray300: #828282;
        --gray200: #999999; 
        --gray150: #BDBDBD;
        --gray100: #e0e0e0;
        --gray50: #f5f5f5
    }
`