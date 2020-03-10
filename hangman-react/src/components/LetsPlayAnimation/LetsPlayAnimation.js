import React from 'react';
import styled from 'styled-components';
import letsplay from '../../assets/letsplay.png';

const LetsPlayAnimation = (props) => {
  return(
      <StyledLetsPlayAnimation className={props.trigger}></StyledLetsPlayAnimation>
  );
}

const StyledLetsPlayAnimation  = styled.div`
    position: absolute;
    top: 20%;
    left: 10%;
    width: 80%;
    height: 300px;
    background-image: url(${letsplay});
    background-position: 50% 0%;
    background-repeat: no-repeat;
    background-size: contain;
    display: none;

    &.yes {
      display: block;
    }
`;

export default LetsPlayAnimation;
