// Core
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// Fonts
// import Roboto from '../fonts/Roboto-Regular.ttf';

export const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }

    html {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        color: #fff;
    }
    
    body {
        overflow-y: hidden;
    }
    
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

    @keyframes animate {
        0% {
            width: 0;
            height: 0;
            opacity: 0.5;
        }
        100% {
            width: 500px;
            height: 500px;
            opacity: 0;
        }
    }
`;
