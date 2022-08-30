import styled, { css } from "styled-components";

interface ButtonProps {
    color: "green" | "gray"
}

export const Button = styled.button<ButtonProps>`
    ${props => props.color==="green" ? css`
        color: #fff;
        background-color: var(--green400);
    `: css`
        color: var(--gray200);
        background-color: var(--gray50);
    `};
    padding: 20px 40px;
    border-radius: 10px;
    border: none;
    margin-bottom: 20px;
    width: 100%;
    cursor: pointer;
    font-size: 1.25rem;
    transition: all 0.5s;
`