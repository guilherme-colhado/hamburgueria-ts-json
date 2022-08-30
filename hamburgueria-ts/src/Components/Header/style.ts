import styled from "styled-components";

interface SearchProps {
    active: boolean
}

export const Header = styled.header<SearchProps>`
    background-color: var(--gray50);
    margin-bottom: 25px;
    >div:nth-child(1){
        width: 100%;
        padding: 20px 10px;
        max-width: 1370px;
        display: ${({active}) => active ? `none` : 'flex'};
        margin: auto;
        justify-content: space-between;
        align-items: flex-end;
        >div{
            >:nth-child(1){
                display: none;
            }
            align-items: center;
            display: flex;
            gap: 5px;
        }
    }
    h1{
        color: var(--gray600);
        font-size: 2.3rem;
        span{
            font-size: 1.7rem;
            color: var(--red400);
        }
    }
    >div:nth-child(2){
        display: ${({active}) => active ? `flex` : 'none'};
        padding: 10px 0;
        justify-content: center;
    }
    @media screen and (min-width: 720px) {
        >div:nth-child(1){
            display: flex;
            div>:nth-child(1){
                display: flex;
            }
            >div>:nth-child(2){
                display: none;
            }
        }
            >div:nth-child(2){
            display: none;
        }
    }
`

interface IconButtonProps {
    num?: boolean
}

export const IconButton = styled.button<IconButtonProps>`
    color: var(--gray150);
    position: relative;
    background-color: transparent;
    border: none;
    font-size: 1.8rem;
    cursor: pointer;
    span{
        color: white;
        font-weight: bold;
        position: absolute;
        top: -7px;
        right: 1px;
        font-size: 0.875rem;
        background-color: var(--green400);
        padding: 2px 5px;
        border-radius: 5px;
    }
`


export const Search = styled.div`
    width: 95%;
    max-width: 365px;
    background-color: #fff;
    border: 2px solid var(--gray100);
    padding: 10px;
    border-radius: 10px;
    height: max-content;
    &:focus-within{
        border-color: black;
    }
    input{
        font-size: 1.2rem;
        border: none;
        width:calc(100% - 43px);
        outline: none;
    }
    button{
        background-color: var(--green400);
        color: #fff;
        padding: 5px 10px;
        border: none;
        border-radius: 5px;
        font-size: 1.4rem;
        cursor: pointer;
        >svg{
            margin-bottom: -2px;
        }
    }
    @media screen and (min-width: 720px) {
        display: flex;
    }
`