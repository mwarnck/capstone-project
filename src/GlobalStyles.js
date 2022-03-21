import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
 }

 :root {
    --bg-color-main: #0f0e17;
    --bg-color-secondary: #fffffe;
    --bg-color-tertiary: #f25f4c;
    --bg-color-button: #ff8906;
    --font-color-headlines-bright: #fffffe;
    --font-color-headlines-dark: #0f0e17;
    --font-color-text-bright: #a7a9be;  
    --font-color-text-dark: #2e2f3e;  
    --font-color-button: #fffffe;
 }

 body {
   font-family: sans-serif;
   background-color: var(--bg-color-main);
   color: var(--font-color-text-bright)
 }

 select,
 input,
 textarea {
    font-size: 16px;
    font-family: sans-serif;
 }

 .sr-only{
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
 }

`;
