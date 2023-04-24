import { PropsWithChildren } from "react";
import styled from "styled-components";

export const Container = styled.div`
    width: 20rem;
    background-color: white;
    position: absolute;
    top: 1rem;
    right: 0;
    left: 0;
    margin: auto;
    border-radius: 1rem;
    text-align: center;
    padding: 0.5rem;
    transition: all 0.5s;
    border: solid 2px transparent;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    align-items: center;
    color: ${(props) => props.color};

    p {
        border-radius: 50%;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        color: ${(props) => props.color};
        font-size: 2rem;
    }

    &:hover {
        top: 1rem;
        animation: sucess 0.4s;
    }

    @keyframes sucess{
        0% {
            border-left: 2px solid ${(props) => props.color};
        }
        25% {
            border-bottom: 2px solid ${(props) => props.color};
        }
        50% {
            border-right: 2px solid ${(props) => props.color};
        }
        100% {
            border-top: 2px solid ${(props) => props.color};
        }
    }
`;