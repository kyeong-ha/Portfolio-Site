import styled from "styled-components"

export const Container = styled.div`
    width: 90%;
    height: 100%;

    text-align: ${(props) => (props.textAlign === 'left' ? ' left' : ' center')};
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;