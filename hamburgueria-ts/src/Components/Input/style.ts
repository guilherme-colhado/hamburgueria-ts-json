import styled from "styled-components";

interface InputProps {
    error: '' | 'no' | 'yes'
}

export const Input = styled.div<InputProps>`
    position: relative;
    height: 48px;
    >input{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        padding: 10px;
        outline: none;
        background: none;
        border: 2px solid var(${(props) => props.error == 'yes' ? '--red700' : props.error === 'no' ? '--green700' : '--gray600'});
        font-size: 1.3rem;
        z-index: 1;
        &:focus + Label, &:not(:placeholder-shown) + Label{
            top: 0;
            font-size: 1rem;
            z-index: 10;
            color: black;
        }
    }
    >label{
        color: var(--gray600);
        position: absolute;
        top: 50%;
        border-radius: 10px;
        transform: translate(0, -50%);
        left: 10px;
        padding: 0 10px;
        background-color: white;
        font-size: 1.25rem;
        transition: all .3s;
    }
`

export const ErrorText = styled.span`
    color: var(--red700);
    width: max-content;
    font-size: 1rem;
    margin: 0;
    padding: 0;
`