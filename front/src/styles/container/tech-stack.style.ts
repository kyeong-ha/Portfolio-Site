import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    text-align: center;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    background-color: #333333;
    color: #F2F4F3;

    padding: 8% 8%;
    padding-bottom: 0;
`;

export const FormName = styled.span`
    width: 100%;
    height: auto;

    display: flex;
    justify-content: center;
    gap: 0.3rem;
    margin-bottom: 1rem;

    & > h2:last-child {
      background-color: #F2F4F3;
      color: #333333;
      padding: 0 0.2%;
    }
`;

export const SkillName = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas: "title line";
    
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 2%;

    & > .line {
        grid-area: line;

        display: flex;
        flex-basis: 1;
        align-items: center;
        color: #F2F4F3
        &:before{
            content: '';
            flex-grow: 1;
            background: #F2F4F3;
            height: 1px;
            font-size: 0px;
            line-height: 0px;
        }

        &:after{
            content: '';
            flex-grow: 1;
            background: #F2F4F3;
            height: 1px;
            font-size: 0px;
            line-height: 0px;
        }
    }
`;

export const SkillList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > div {
    margin-bottom: 8%;
  }
`;