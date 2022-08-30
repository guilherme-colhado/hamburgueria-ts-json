import styled from 'styled-components';

export const FormsPage = styled.main`
    display: flex;
    flex-direction: column;
    max-width: 720px;
    padding: 0 10px;
    @media screen and (min-width: 720px) {
        flex-direction: row-reverse;
        max-width: 1080px;
        gap: 20px;
        margin: 0 auto;
        height: 100vh;
        align-items: center;
    }
`