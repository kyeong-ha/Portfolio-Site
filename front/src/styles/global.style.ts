import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        border:0;
    }
    html,body,#root {
        background-color: ${(props) => props.theme.bodyBackgroundColor};
        color:${(props) => props.theme.bodyFontColor};
        width: 100%;
        height: auto;
        min-height: 820px;
        font-size: 16px;
        font-family: "Raleway", sans-serif;
        font-optical-sizing: auto;
        text-align: center;
        position: relative;
        overflow-x: clip;

        display: flex;
        flex-direction: column;
        align-items: center;
      }
      h1{
          font-size: 90px;
          font-weight: 400;
      }
      h2{
        font-size: 28px;
        font-weight: 400;
      }
      h3{
        font-size: 22px;
        font-weight: 500;
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
    
    .korean-font{
      font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    }

    .click-button {
      &:hover {
        cursor: pointer;
      }
    }
`;

export default GlobalStyle;