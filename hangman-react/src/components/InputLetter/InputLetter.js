import React from 'react';
import styled from 'styled-components';

const InputLetter = (props) => {
    const status = props.status;
    const clickedStatus = status === 'init' ? "" : " clicked";
    const gameOver = props.gameOver;
    const gameOverStatus = gameOver ? " gameover" : "";

    return(
        <StyledInPutLetter className={"letter " + status + clickedStatus + gameOverStatus } value={props.value} onClick={props.click}>{props.value}</StyledInPutLetter>
    );
}

const StyledInPutLetter = styled.div`
    box-sizing: border-box;
    text-transform: uppercase;
    background-color: #666600;
    color: #dbaa16;
    border: 2px solid black;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
    transition: 0.2s all ease-in-out;

    &:hover {
        background-color: #008888;
        cursor: pointer;
    }

    &.hit {
        background-color: #195904;
    }

    &.miss {
        background-color: #800000;
    }

    &.clicked,
    &.gameover {
        pointer-events: none;
    }
`;

export default InputLetter;
