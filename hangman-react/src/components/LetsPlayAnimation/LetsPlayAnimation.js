import React from 'react';
import styled from 'styled-components';

const LetsPlayAnimation = (props) => {
  return(
      <StyledLetsPlayAnimation className={props.trigger}>Let's Play</StyledLetsPlayAnimation>
  );
}

const StyledLetsPlayAnimation  = styled.div`
    color: red;
    font-size: 1.2rem;
    width: 60px;
    text-align: center;
    text-transform: uppercase;
    margin: 0 auto;
    display: none;

    &.yes {
      display: block;
    }
`;

export default LetsPlayAnimation;
