import React from 'react';
import styled from 'styled-components';

const TitleStatus = (props) => {
    return(
        <StyledTitleStatus value={props.value}>{props.value}</StyledTitleStatus>
    );
}

const StyledTitleStatus = styled.div`
    color: purple;
    font-size: 2rem;
    text-transform: uppercase;
`;

export default TitleStatus;
