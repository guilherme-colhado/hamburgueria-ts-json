import styled from "styled-components";

export const CardProduct = styled.section`
    border: 2px solid var(--gray100);
    min-width: 300px;
    border-radius: 10px;
    transition: all 0.5s;
    figure{
        background-color: var(--gray50);
        height: 150px;
        width: 100%;
        border-radius: 10px 10px 0 0;
        display: flex;
        justify-content: center;
        img{
            height: 100%;
            margin: 0 auto;
        }
    }
    div{
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        h3{
            color: var(--gray600);
            font-size: 1.2rem;
            font-weight: 700;
        }
        p{
            color: var(--gray300);
            font-size: 0.95rem;
            font-weight: 400;
        }
        h4{
            font-weight: 500;
            color: var(--green400);
        }
        button{
            color: white;
            background-color: var(--gray150);
            padding: 10px 20px;
            border: none;
            width: max-content;
            transition: all 0.5s;
            display: flex;
            align-items: center;
            gap: 5px;
            cursor: pointer;
            border-radius: 5px;
            font-size: 1.05rem;
        }
    }
    &:hover{
        border-color: var(--green400);
        button{
            background-color: var(--green400);
        }
    }
`