import React from 'react';
import styled from 'styled-components';

const WordLetter = (props) => {
    return(
        <StyledWordLetter className="word_letter">{props.value}</StyledWordLetter>
    );
}

const StyledWordLetter = styled.span`
    color: #195904;
    font-weight: bold;
    font-size: 2rem;
    padding: 16px 0;
    width: 25px;
    display: inline-block;
`;

export default WordLetter;