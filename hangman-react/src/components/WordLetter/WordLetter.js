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
    font-family: "WV_HM2";
    text-transform: uppercase;
    color: #195904;
    font-weight: bold;
    font-size: 3rem;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 16px;
    
    &.unfound {
      color: #800000;
    }
`;

export default WordLetter;