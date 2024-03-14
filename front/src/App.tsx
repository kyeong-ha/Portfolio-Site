import GlobalStyle from "./styles/global.style";
import Header from "./components/header/header";
import ProfileForm from "./components/container/profile";
import Container from "./components/container/container-layout";
import TechStackForm from "./components/container/tech-stack";
import { Scroll } from "./styles/scroll.style";


export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header/>

      <ProfileForm/>
      <TechStackForm/>

      <Scroll>
            <span></span>
            <p>Scroll</p>
      </Scroll>
    </>
  );
};