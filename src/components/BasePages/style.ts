import styled from "styled-components";

export const Header = styled.div`
    width: 100%;
    height: 100px;
    background-color: orange;
`

export const DivContent = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Navigation = styled.div`
    height: calc(100vh - 100px);
    width: 8rem;
    background-color: red;
`;


export const Content = styled.div`
    background-color: green;
    width: 100%;
    height: calc(100vh - 100px);
`