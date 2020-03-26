import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #f0f0f5;
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button {
        font: 14px Roboto, sans-serif;
    }

    button {
        cursor: pointer;
    }

    form input {
        width: 100%;
        height: 60px;
        color: #333;
        border: 1px solid #dcdce6;
        border-radius: 8px;
        padding: 0 24px;
    }
`;
