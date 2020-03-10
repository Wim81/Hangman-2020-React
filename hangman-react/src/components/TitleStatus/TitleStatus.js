import React from 'react';
import styled from 'styled-components';
import title_hangman from '../../assets/title_hangman.png';
import title_alright from '../../assets/title_alright.png';
import title_gameover from '../../assets/title_gameover.png';

const TitleStatus = (props) => {
    let bgImg = props.image;
    let classes = null;
    switch(bgImg) {
        case 'title_hangman':
            classes = "titleStatus title_hangman";
            break;
        case 'title_alright':
            classes = "titleStatus title_alright";
            break;
        case 'title_gameover':
            classes = "titleStatus title_gameover";
            break;
        default:
            return 'Something went wrong';
    }

    return(
        <StyledTitleStatus className={classes} />
    );
}

const StyledTitleStatus = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 72%;
    height: 25%;
    position: absolute;
    top: 0;
    left: 14%;
    transition: all 0.3s ease-in-out;
    
    &.title_hangman { background-image: url(${title_hangman}); top: 2%;};
    &.title_alright { background-image: url(${title_alright})};
    &.title_gameover { background-image: url(${title_gameover})};
`;

export default TitleStatus;
