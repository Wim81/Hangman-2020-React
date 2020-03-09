import React from 'react';
import styled from 'styled-components';

const ErrorStatus = (props) => {
    return(
        <ErrorTitleStatus value={props.value}>{props.value}</ErrorTitleStatus>
    );
}

const ErrorTitleStatus = styled.div`
    color: blue;
    font-size: 1.5rem;
    text-transform: uppercase;
`;

export default ErrorStatus;
