import styled from "styled-components";

export const Catchy = styled.div`
    margin-top: 20px;
    >h1{
        color: var(--gray600);
        font-weight: bold;
        font-size: 3.3rem;
        >span{
            margin-left: 5px;
            color: var(--red400);
            font-size: 2rem;
        }
    }
    >div{
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 15px;
        padding: 10px;
        border: 1px solid var(--gray100);
        border-radius: 5px;
        >div{
            padding: 10px;
            background-color: var(--green450);
            color: var(--green400);
            width: max-content;
            border-radius: 5px;
            font-size: 2.5rem;
            margin-right: 10px;
        }
        >p{
            font-size: 0.875;
            font-weight: 400;
            color: var(--gray300);
        }
    }
    figure{
        display: none;
    }
    @media screen and (min-width: 720px) {
        figure{
            margin: 20px 10px;
            display: flex;

        }
    }
`