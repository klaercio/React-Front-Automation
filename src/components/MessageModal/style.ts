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
    transform: translateY(-4rem);
    animation: toFall 3s, sucess 3s;

    p {
        border-radius: 50%;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        color: ${(props) => props.color};
        font-size: 2rem;
    }

    @keyframes sucess{
        0% {
            border-left: 2px solid ${(props) => props.color};
        }
        98% {
            border-bottom: 2px solid ${(props) => props.color};
        }
        99% {
            border-right: 2px solid ${(props) => props.color};
        }
        100% {
            border-top: 2px solid ${(props) => props.color};
        }
    }

    @keyframes toFall {
        0% {
            transform: translateY(-4rem);
            filter: opacity(50%);
        }
        50% {
            filter: opacity(100%);
        }
        100% {
            transform: translateY(1rem);
            filter: opacity(0%);
        }
    }
`;