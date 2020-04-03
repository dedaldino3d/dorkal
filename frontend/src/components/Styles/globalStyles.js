import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box !important;
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
        font-family: -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, Verdana, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-size: calc(13px + (16 - 13) * ((100vw - 200px) / (1600 - 200)));
        background-color: var(--bg);
        color: #222;
        -webkit-font-smoothing: antialiased !important;
    }
    
    body {
        --white: #fff;
        --black: #000;
        --blue: #0084ff;
        --violet: #8a00e6;
        --red: #ff0101;
        --yellow: #ffff00; 
        --gray-95: #1a1a1a;   
        --gray-90: #3d3d42;
        --gray-80: #595959;
        --gray-60: #808080;
        --gray-50: #a6a6a6;
        --gray-40: #a2a2a9;
        --gray-30: #cccccc;
        --gray-20: #d6d6db
        --gray-10: #f1f1f3;
        --blue-95: #e6e6ff;
        --blue-90: #e6f9ff;
        --blue-85: #cce6ff;
        --blue-80: #99ccff;
        --blue-70: #80bfff;
        --blue-60: #66b5ff;
        --blue-50: #005cb3;
        --blue-20: #004080;
        --violet-90: #7a00cc;
        --violet-80: #9900ff;
        --violet-40: #ecb3ff;
        --violet-20: #f9e6ff;
        --red-90: #ff3300;
        --red-80: #ff8080;
        --red-70: #ff9999;
        --yellow-90: #ffff4d;
        --yellow-80: #ffff99;
        --yellow-40: #ffffcc;
        --yellow-10: #ffffe6;
        --bg: #eff5f5;
        --focus-ring: rgba(0,149,255,0.15);
        --shadow-100: rgba(0,0,0,.5);
        --shadow-80: rgba(0,0,0,.3);
        --shadow-60: rgba(0,0,0,.2);
        --shadow-40: rgba(0,0,0,0.15);
        --shadow-20: rgba(0,0,0,0.1);
        --shadow-0: rgba(0,0,0,.012);
        --bs-xl: 0 1px 6px rgba(0,0,0,0.09),0 3px 12px rgba(0,0,0,0.09),0 4px 17px rgba(0,0,0,0.13);
        --bs-lg: 0 1px 4px rgba(0,0,0,0.09),0 3px 8px rgba(0,0,0,0.09),0 4px 13px rgba(0,0,0,0.13);
        --bs-md: 0 1px 3px rgba(0,0,0,0.06),0 2px 6px rgba(0,0,0,0.06),0 3px 8px rgba(0,0,0,0.09);
        --bs-inset: inset 0 4px 6px 0 rgba(255, 255,255, .2),inset 0 5px 10px 0 rgba(255, 255,255, .3);
    }
    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        font-weight: bold;
        :link{
            color: var(--gray-95);
        }
        :visited{
            color: var(--gray-95);
        }
        :hover{
            color: var(--gray-95);
        }
        :active{
            color: var(--gray-95);
        }
    }
    
    input {
        color: var(--gray-95);
    }

    svg {
        font-size: calc(14px + (19 - 14) * ((100vw - 200px) / (1600 - 200))) ;
        min-height: calc(14px + (19 - 14) * ((100vw - 200px) / (1600 - 200)));
        font-weight: normal;
    }

    svg:not(:root) {
        overflow: hidden;
    }
`
