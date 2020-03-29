import React from 'react';
import styled from 'styled-components';
import errors_left_0 from '../../assets/errors_left_0.png';
import errors_left_1 from '../../assets/errors_left_1.png';
import errors_left_2 from '../../assets/errors_left_2.png';
import errors_left_3 from '../../assets/errors_left_3.png';
import errors_left_4 from '../../assets/errors_left_4.png';
import errors_left_5 from '../../assets/errors_left_5.png';

const ErrorStatus = (props) => {
    let errorStatus = props.value;
    let classes = null;
    switch(errorStatus) {
        case 'errors_left_0':
            classes = "errorStatus errors_left_0";
            break;
        case 'errors_left_1':
            classes = "errorStatus errors_left_1";
            break;
        case 'errors_left_2':
            classes = "errorStatus errors_left_2";
            break;
        case 'errors_left_3':
            classes = "errorStatus errors_left_3";
            break;
        case 'errors_left_4':
            classes = "errorStatus errors_left_4";
            break;
        case 'errors_left_5':
            classes = "errorStatus errors_left_5";
            break;
        case 'default':
            classes = "errorStatus";
            break;
        default:
            return '';
    }

    return(
        <StyledErrorStatus className={classes}></StyledErrorStatus>
    );
}

const StyledErrorStatus = styled.div`
    width: 68%;
    height: 14%;
    margin: 0 auto;
    position: relative;
    top: -17.5%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    
    &.errors_left_0 { background-image: url(${errors_left_0})};
    &.errors_left_1 { background-image: url(${errors_left_1})};
    &.errors_left_2 { background-image: url(${errors_left_2})};
    &.errors_left_3 { background-image: url(${errors_left_3})};
    &.errors_left_4 { background-image: url(${errors_left_4})};
    &.errors_left_5 { background-image: url(${errors_left_5})};
`;

export default ErrorStatus;
