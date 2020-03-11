import React from 'react';
import styled, { keyframes } from 'styled-components';
import letsplay from '../../assets/letsplay.png';

const LetsPlayAnimation = (props) => {
  return(
      <StyledLetsPlayAnimation className={props.trigger}></StyledLetsPlayAnimation>
  );
}

const letsPlayAnimation = keyframes`
    0%   {transform: translateY(0px); opacity: 0;}
    50%  {opacity: .9;}
    100% {transform: translateY(-50px); opacity: 0;}
`

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
    opacity: 0;
    animation-name: ${letsPlayAnimation};
    animation-duration: 3s;
`;

export default LetsPlayAnimation;
