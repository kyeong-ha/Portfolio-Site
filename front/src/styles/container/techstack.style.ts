import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    text-align: center;
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    
    background-color: #333333;
    color: #F2F4F3;

    padding: 8% 8%;
`;

export const FormName = styled.h2`
    width: fit-content;
    height: auto;

    color: ${(props) => props.reverse ? '#F2F4F3' : '#333333'};
    background-color:${(props) => props.reverse ? '#333333' : '#F2F4F3'};

    padding: 0 0.5%;
    display: inline-block;
`;

export const SkillName = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas: "title line";
    
    align-items: center;
    column-gap: 1rem;

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

export const Skill = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
`;