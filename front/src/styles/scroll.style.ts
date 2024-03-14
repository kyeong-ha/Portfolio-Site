import styled from "styled-components"

export const Scroll = styled.a`
  position: fixed;
  top: 90vh;
  
  height: 2.7rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & > span {
    width: 1.15rem;
    height: 1.15rem;

    border-left: 1px solid #333333;
    border-bottom: 1px solid #333333;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    
    -webkit-animation: sdb 1.5s infinite;
    animation: sdb 1.5s infinite;
    box-sizing: border-box;
  }

  & > p {
    font-size: 0.9rem;
  }

  @-webkit-keyframes sdb {
    0% {
      -webkit-transform: rotate(-45deg) translate(1rem, -1rem);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -webkit-transform: rotate(-45deg) translate(0, 0);
      opacity: 0;
    }
  }
  @keyframes sdb {
    0% {
      transform: rotate(-45deg) translate(1rem, -1rem);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: rotate(-45deg) translate(0, 0);
      opacity: 0;
    }
  }
`;