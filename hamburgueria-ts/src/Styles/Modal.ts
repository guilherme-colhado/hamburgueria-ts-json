import styled from "styled-components";

interface ModalProps {
    active: boolean
}

export const Modal = styled.div<ModalProps>`
    min-height: 100vh;
    min-width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    display: ${({active})=>active? 'flex' : 'none'};
    background-color: var(--gray550);
    z-index: 1000;
`