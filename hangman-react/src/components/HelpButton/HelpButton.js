import React from 'react';
import styled from 'styled-components';
import helpImg from '../../assets/help_btn.png';

const HelpButton = (props) => {
    return(
        <StyledHelpButton className="help_btn" onClick={props.click} />
    );
}

const StyledHelpButton = styled.div`
   width: 100px;
   height: 100px;
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