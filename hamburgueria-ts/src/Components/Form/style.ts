import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 15px;
    padding: 20px 10px 5px;
    border: 1px solid var(--gray100);
    border-radius: 5px;
    >section{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        >h2{
            color: var(--gray600);
        }
        >a{
            font-size: 0.875rem;
            text-decoration: underline;
            color: var(--gray300);
        }
    }
    >div{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    >p{
        width: 50%;
        min-width: 250px;
        margin: 0 auto 20px;
        text-align: center;
        font-size: 0.875rem;
        color: var(--gray200);
    }
`