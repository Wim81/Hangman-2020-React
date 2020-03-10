import React from 'react';
import styled from 'styled-components';
import helpImg from '../../assets/help_btn.png';

const HelpButton = (props) => {
    return(
        <StyledHelpButton className="help_btn" onClick={props.click} />
    );
}

const StyledHelpButton = styled.div`
   width: 65px;
   height: 65px;
   position: absolute;
   top: 69%;
   right: 4%;
   z-index: 5;
   margin: 0 auto;
   background-image: url(${helpImg});
   background-repeat: no-repeat;
   background-size: contain;
   background-position: center;
   
   &:hover {
    cursor: pointer;
   }
`;

export default HelpButton;