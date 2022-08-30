import { Button } from './../Button/style';
import styled from "styled-components";

export const CardCart = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    >div{
        display: flex;
        height: max-content;
        figure{
            width: 80px;
            height: 80px;
            display: flex;
            justify-content: center;
            border-radius: 10px;
            margin-right: 10px;
            background-color: var(--gray100);
            img{
                height: 100%;
            }
        }
        >div{
            height: 80px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            >h3{
                color: var(--gray600);
                font-size: 1.2rem;
            }
            >div{
                border: 2px solid var(--gray50);
                display: flex;
                border-radius: 5px;
                overflow: hidden;
                width: 105px;
                button{
                    background-color: var(--gray50);
                    border: none;
                    width: 30%;
                    color: var(--red400);
                    cursor: pointer;
                    font-size: 1.1rem;
                }
                p{
                    text-align: center;
                    padding: 0 5px;
                    width: 40%;
                    font-size: 1.1rem;
                }
            }
        }
    }
    >button{
        color: var(--gray300);
        background-color: transparent;
        border: none;
        font-size: 10px;
        cursor: pointer;
        svg{
            font-size: 1.5rem;
        }
    }
`