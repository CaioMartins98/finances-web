import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        /* box-shadow: 0 0 0 2px ${(props) => props.theme["green-500"]}; */
    }

    body {
        background-color:  ${(props) => props.theme["gray-800"]};
        color:  ${(props) => props.theme["gray-100"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button{
        font: 400 1rem 'Roboto', sans-serif;
    }

    body::-webkit-scrollbar {
        width: 10px;               /* width of the entire scrollbar */
    }

    body::-webkit-scrollbar-track {
        background: #29292E;        /* color of the tracking area */
    }

    body::-webkit-scrollbar-thumb {
        background-color: #015F43;    /* color of the scroll thumb */
        border-radius: 10px;       /* roundness of the scroll thumb */
        border:0;  /* creates padding around scroll thumb */
}
`;
