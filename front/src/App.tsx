import GlobalStyle from "./styles/global.style";
import Header from "./components/header/header";
import ProfileForm from "./components/profile-form/profile-form";
import Container from "./components/container/container-layout";
import { ThemeProvider } from "styled-components";
import theme from "./styles/colors/light-color";
import TechStackForm from "./components/container/techstack-form";


export default function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header/>


      {/* <Container textAlign="left">
        <ProfileForm/>
      </Container> */}

      <Container>
        <TechStackForm/>
      </Container>
    </ThemeProvider>
    </>
  );
};