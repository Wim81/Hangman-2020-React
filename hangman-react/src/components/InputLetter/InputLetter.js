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
    font-size: 1.5rem;
    border-top: 0px solid black;
    border-right: 3px solid black;
    border-bottom: 3px solid black;
    width: 14.28%;
    height: 25%;
    padding-top: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s all ease-in-out;
    
    &[value='a'],
    &[value='b'],
    &[value='c'],
    &[value='d'],
    &[value='e'],
    &[value='f'],
    &[value='g'] {
        border-top: 3px solid black;
    }

    &[value='a'],
    &[value='h'],
    &[value='o'] {
        border-left: 3px solid black;
    }
    
    &[value='v'] {
        box-shadow: -3px 0px 0px 0px black;
    }

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
    
    @media (min-width: 420px) {
        font-size: 2.5rem;
    }
`;

export default InputLetter;
