import React from 'react';
import styled from 'styled-components';

const WordLetter = (props) => {
  const status = props.status;
  const classes = "word_letter " + status;
  
    return(
        <StyledWordLetter className={classes}>{props.value}</StyledWordLetter>
    );
}

const StyledWordLetter = styled.span`
    color: #195904;
    font-weight: bold;
    font-size: 2rem;
    padding: 16px 0;
    width: 25px;
    display: inline-block;
    
    &.unfound {
      color: #800000;
    }
`;

export default WordLetter;