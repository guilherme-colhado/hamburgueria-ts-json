import styled from "styled-components";

export const Cart = styled.div`
    height: max-content;
    width: 90%;
    margin: 70px auto 0;
    max-width: 500px;
    header{
        display: flex;
        background-color: var(--green400);
        border-radius: 10px 10px 0 0;
        width: 100%;
        padding: 10px;
        align-items: center;
        justify-content: space-between;
        h2{
            color: white;
            font-size: 1.4rem;
            font-weight: bold;
        }
        button{
            background-color: transparent;
            border: none;
            font-weight: bold;
            font-size: 1.2rem;
            color: var(--gray550);
            cursor: pointer;
        }
    }
    main{
        display: flex;
        background-color: white;
        min-height: 160px;
        border-radius: 0 0 10px 10px;
        width: 100%;
        gap: 10px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: centers;
        padding: 10px 20px 5px;
        >h2{
            color: var(--gray600);
            margin-bottom: 10px;
        }
        >h5{
            color: var(--gray300);
        }
        hr{
            background-color: var(--gray100);
            width: 100%;

        }
        >div{
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 5px;
            h2{
                font-size: 1.2rem;
                color: var(--gray600);
            }
            h3{
                color: var(--gray300);
                font-size: 1.2rem;
            }
        }
    }
`