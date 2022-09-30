import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & img {
        width: 180px;
    }

    & nav {
        display: flex;
        gap: 50px;
    }
`