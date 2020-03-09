import React from 'react';
import styled from 'styled-components';

const NewWordButton = (props) => {
    return(
        <StyledNewWordButton onClick={props.click}>New Word</StyledNewWordButton>
    );
}

const StyledNewWordButton = styled.div`
    text-transform: uppercase;
    text-align: center;
    background-color: rgba(25, 89, 4, 0.5);
    color: #dbaa16;
    border-top: 3px solid black;
    border-bottom: none;
    border-right: none;
    border-left: none;
    cursor: pointer;
    padding-top: 2%;
    padding-bottom: 2%;
`;

export default NewWordButton;
