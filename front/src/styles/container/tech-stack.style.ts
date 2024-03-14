import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: auto;

    text-align: center;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
    background-color: #333333;
    color: #F2F4F3;

    padding: 10% 8%;
    gap: 7%;
`;

export const FormName = styled.span`
    width: 100%;
    height: auto;

    display: flex;
    justify-content: center;
    gap: 0.3rem;
    margin-bottom: 4rem;

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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
`;