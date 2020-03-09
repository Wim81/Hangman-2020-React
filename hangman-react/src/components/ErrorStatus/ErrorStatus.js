import React from 'react';
import styled from 'styled-components';

const ErrorStatus = (props) => {
    return(
        <StyledErrorStatus class="errorStatus" value={props.value}>{props.value}</StyledErrorStatus>
    );
}

const StyledErrorStatus = styled.div`
    color: blue;
    font-size: 1.5rem;
    text-transform: uppercase;
`;

export default ErrorStatus;
