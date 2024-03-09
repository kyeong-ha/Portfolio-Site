import GlobalStyle from "./styles/GlobalStyle.ts";
import Header from "./components/header/header.tsx";

import styled from "styled-components"
import Symbol from "./icons/symbol.svg";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header/>

      <Symbol />
      Park Kyeongha
      Web Developer
      
    </>
  );
};