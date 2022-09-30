import styled from "styled-components";

export const Container = styled.div`
    padding: 7px 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: all .3s;
    border: 2px solid transparent;
    position: relative;
    z-index: 2;
    color: ${props => props.style === 0 ? 'white' : '#707070'};

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: ${props => props.style === 0 ? 0 : 'calc(100% + 4px)'};
        border: ${props => props.style === 0 ? 0 : '2px solid transparent'};
        z-index: -1;
        width: ${props => props.style === 0 ? '100%' : '0'};;
        height: 100%;
        background: ${props => props.style === 0 ? '#8591FF' : 0};

        transition: all ease-in-out .4s;
    }

    &:hover {
        color: white;
        &::after {
            width: 100%;
            left: 0;
        }
    }
`