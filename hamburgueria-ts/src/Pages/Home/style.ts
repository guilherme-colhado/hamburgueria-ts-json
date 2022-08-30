import styled from "styled-components";

export const MainHome = styled.main`
    width: 99%;
    padding: 0 10px;
    max-width: 1370px;
    margin: auto;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    padding-bottom: 10px;
    div{
        figure{
            font-weight: bold;
            font-size: 4rem;
            text-align: center;
            margin-bottom: 15px;
        }
    }
    ::-webkit-scrollbar {
        height: 10px;
    }
    ::-webkit-scrollbar-track {
        background: var(--gray50); 
    }
    
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: var(--green400);
    }
    gap: 49px;
    @media screen and (min-width: 720px) {
        flex-wrap: wrap;
        overflow-x: visible;
        justify-content: center;
    }
`