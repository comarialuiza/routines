import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600&display=swap');
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body {
        -webkit-font-smoothing: antialiased;
        font-family: 'Open Sans', sans-serif;
    }

    body, html, #root {
        height: 100%;
    }

    button {
        cursor: pointer;
    }
`;