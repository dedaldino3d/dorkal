import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    /* // Media applied ex: Mobile L 
    @media (min-width: 576px) {
        html {
            max-width: 100%;
        }
    }

    // Media applied ex: Tablet 
    @media (min-width: 768px) {
        html {
            max-width: 100%;
        }
    }

    // Media applied ex: Laptop S 
    @media (min-width: 992px) {
        html {
            max-width: 100%;
        }
    }

    // Media applied ex: Laptop L
    @media (min-width: 1200px) {
        html {
            max-width: 100%;
        }
    } */

    html, body, #root {
        height: 100%;
        text-size-adjust: 100%;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-size: calc(13px + (16 - 13) * ((100vw - 200px) / (1600 - 200)));
        background-color: rgb(21, 32, 43);
        color: #fff;
        -webkit-font-smoothing: antialiased !important;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        font-weight: bold;
        :link{
            color:#fff;
        }
        :visited{
            color:#fff;
        }
        :hover{
            color:#fff;
        }
        :active{
            color:#fff;
        }
    }

    svg {
        width: calc(14px + (19 - 14) * ((100vw - 200px) / (1600 - 200))) !important;
        min-height: calc(14px + (19 - 14) * ((100vw - 200px) / (1600 - 200))) !important;
        font-weight: normal;
    }

    svg:not(:root) {
        overflow: hidden;
    }
`
