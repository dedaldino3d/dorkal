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
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-size: calc(14px + (16 - 14) * ((100vw - 300px) / (1600 - 300)));
        background-color: #fafafa;
        -webkit-font-smoothing: antialiased !important;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

`
