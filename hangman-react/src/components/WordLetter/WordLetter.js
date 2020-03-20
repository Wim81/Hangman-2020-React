import React from 'react';
import styled from 'styled-components';

const WordLetter = (props) => {
  const status = props.status;
  const wordsize = props.wordsize;
  const classes = "word_letter " + status + " " + wordsize;
  
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
    
    &.medium {
      font-size: 2.5rem;
      width: 40px;
    }
    
    &.large {
      font-size: 2rem;
      width: 30px;
    }
    
    @media (max-width: 468px) {
      font-size: 2rem;
      width: 34px;
      
      &.medium {
      font-size: 1.66rem;
      width: 27px;
    }
    
    &.large {
      font-size: 1.33rem;
      width: 20px;
    }
    }
`;

export default WordLetter;