import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "NB International"; 
        src: url("//db.onlinewebfonts.com/t/23255fa3ff7a89589800cea3092f154f.eot"); 
        src: url("//db.onlinewebfonts.com/t/23255fa3ff7a89589800cea3092f154f.eot?#iefix") format("embedded-opentype"), 
             url("//db.onlinewebfonts.com/t/23255fa3ff7a89589800cea3092f154f.woff2") format("woff2"),
             url("//db.onlinewebfonts.com/t/23255fa3ff7a89589800cea3092f154f.woff") format("woff"), 
             url("//db.onlinewebfonts.com/t/23255fa3ff7a89589800cea3092f154f.ttf") format("truetype"), 
             url("//db.onlinewebfonts.com/t/23255fa3ff7a89589800cea3092f154f.svg#NB International") 
             format("svg"); 
    }

    body {
        background: #faf7f2;
    }

    body * {
        font-family: "NB International";
        font-weight: 400;
    }
`;
