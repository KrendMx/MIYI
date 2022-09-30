import styled from "styled-components";

export const Container = styled.div`
    color: ${props => props.color || '#707070'};
    cursor: pointer;
    transition: all .3s;

    &:hover {
        color: ${props => props.activeColor || '#8591FF'};
    }
`