import React from 'react';
import styled from 'styled-components';
import image_0 from '../../assets/image_0.png';
import image_1 from '../../assets/image_1.png';
import image_2 from '../../assets/image_2.png';
import image_3 from '../../assets/image_3.png';
import image_4 from '../../assets/image_4.png';
import image_5 from '../../assets/image_5.png';
import image_6 from '../../assets/image_6.png';
import image_7 from '../../assets/image_7.png';

const StatusImage = (props) => {
    let bgImg = props.image;
    let classes = null;
    switch(bgImg) {
        case 'image_0':
            classes = "statusImg state0";
            break;
        case 'image_1':
            classes = "statusImg state1";
            break;
        case 'image_2':
            classes = "statusImg state2";
            break;
        case 'image_3':
            classes = "statusImg state3";
            break;
        case 'image_4':
            classes = "statusImg state4";
            break;
        case 'image_5':
            classes = "statusImg state5";
            break;
        case 'image_6':
            classes = "statusImg state6";
            break;
        case 'image_7':
            classes = "statusImg state7";
            break;
        default:
            return 'Something went wrong';
    }

    return(
        <StyledStatusImage className={classes} />
    );
}

const StyledStatusImage = styled.div`
    position: absolute;
    top: -0.6%;
    left: -0.8%;
    width: 100%;
    height: 100%;
    z-index: 3;
    background-image: url(${image_0});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    
    &.state1 { background-image: url(${image_1})};
    &.state2 { background-image: url(${image_2})};
    &.state3 { background-image: url(${image_3})};
    &.state4 { background-image: url(${image_4})};
    &.state5 { background-image: url(${image_5})};
    &.state6 { background-image: url(${image_6})};
    &.state7 { background-image: url(${image_7})};
`;

export default StatusImage;
