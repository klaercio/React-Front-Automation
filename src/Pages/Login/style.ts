import styled from 'styled-components';
import LoginImage from '../../images/supermercado.jpg';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`;

export const DivImg = styled.div`
    height: 100vh;
    width: 60%;
    background: url(${LoginImage});
    background-repeat: no-repeat;
    background-size: cover;
    background: cover;
`

export const DivLogin = styled.div`
    width: 40%;
    margin: auto;

    div {
        width: 60%;
        height: 100vh;
        margin: 0 auto;
    }

    form {
        padding-top: 10rem;
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        justify-content: center;
    }

    label {
        font-size: 1rem;
        padding-left: 0.2rem;
    }

    input {
        margin: 0 auto;
        border: 1px solid orange;
        border-radius: 1rem;
        width: 100%;
        padding: 0.75rem 0;
    }

    input::placeholder {
        color: grey;
        padding-left:0.5rem;
    }

    input:hover {
        border-;
    }

    input:nth-child(5) {
        border: 1px solid orange;
        background: orange;
        animation: 1s;
        margin-top: 1rem;
        text-align: center;
    }

    input:nth-child(5):hover {
        border: 1px solid #JA3883;
        filter: brightness(104%);
        cursor: pointer;
    }
`;
