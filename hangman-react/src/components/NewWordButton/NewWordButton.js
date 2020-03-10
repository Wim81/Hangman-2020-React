import React from 'react';
import styled from 'styled-components';

const NewWordButton = (props) => {
    const gameover = props.gameOver ? "gameover" : "";

    return(
        <StyledNewWordButton onClick={props.click} className={gameover}>New Word</StyledNewWordButton>
    );
}

const StyledNewWordButton = styled.div`
    text-transform: uppercase;
    text-align: center;
    font-size: 1.5rem;
    background-color: rgba(25, 89, 4, 0.5);
    color: #dbaa16;
    border-top: 3px solid black;
    border-bottom: none;
    border-right: none;
    border-left: none;
    cursor: pointer;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s all ease-in-out;

    &.gameover {
      background-color: rgba(25, 89, 4, 1);
    }
`;

export default NewWordButton;
