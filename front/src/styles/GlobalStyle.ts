import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        border:0;
    }
    #root { position:relative; }
    html,body {
        color: #333333;
        background-color: #F2F4F3;
        width: 100%;
        height: 100%;
        font-size: 16px;
        font-family: "Raleway", sans-serif;
        font-optical-sizing: auto;
        text-align: center;
        position: relative;
        overflow-x: clip;
      }
      h1{
          font-size: 90px;
          font-weight: 400;
      }
      h2{
        font-size: 32px;
        font-weight: 400;
      }
      ul {
        list-style:none;
      }
      label, input, button, select, img {
        vertical-align:middle;
        font-size:1rem;
      }
      input, button {
        font-family:'Noto Sans KR', sans-serif;
        font-size:1rem;
        width: fit-content;
      }
      input[type="submit"] {
        cursor:pointer
      }
      button {
        cursor:pointer
      }
      textarea, select {
        font-family:'Noto Sans KR', sans-serif;
        font-size:1rem;
      }
      p {
        word-break:break-all;
      }
      a {
        text-decoration:none;
      }
      a:hover {
        text-decoration:none;
      }
      *, :after, :before {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
         box-sizing: border-box;
    }

`;

export default GlobalStyle;