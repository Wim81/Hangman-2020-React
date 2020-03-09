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
    console.log(bgImg);

    return(
        <StyledStatusImage />
    );
}

const StyledStatusImage = styled.div`
    width: 150px;
    height: 150px;
    margin: 0 auto;
    background-image: url(${image_5});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`;

export default StatusImage;
