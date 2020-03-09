import React from 'react';
import styled from 'styled-components';

const StatusImage = (props) => {
    return(
        <StyledStatusImage src={props.src} />
    );
}

const StyledStatusImage = styled.img`
    width: 150px;
    height: 150px;
    margin: 0 auto;
`;

export default StatusImage;
