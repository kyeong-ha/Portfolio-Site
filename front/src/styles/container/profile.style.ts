import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    text-align: left;
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    padding: 0 8%;
    padding-top: 70px;
`;

export const Profile = styled.div`
    & > * {
        white-space: nowrap;
    }
`;

export const Callout = styled.div`
    border-left: 2px solid #333;
    padding: 0.3rem 0;
    padding-left: 1rem;

    * > p {
        line-height: 1.4rem;
        margin: 0.3rem 0;
    }
`;

export const PlatformLink = styled.div`
    display: flex;
    gap: 1.5rem;
    
    & > .platform {
        display: flex;
        align-items: center;
        gap: 0.2rem;
    }

    & > * > svg {
        width: 1.1rem;
        height: auto;
    }
`;