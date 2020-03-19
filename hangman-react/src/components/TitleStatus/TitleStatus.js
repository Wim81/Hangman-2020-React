import React from 'react';
import styled from 'styled-components';
import title_hangman from '../../assets/title_hangman.png';
import title_alright from '../../assets/title_alright.png';
import title_gameover from '../../assets/title_gameover.png';

const TitleStatus = (props) => {
    let bgImg = props.image;
    let classes = null;
    switch(bgImg) {
        case 'show_title_hangman':
            classes = "show_title_hangman";
            break;
        case 'show_title_alright':
            classes = "show_title_alright";
            break;
        case 'show_title_gameover':
            classes = "show_title_gameover";
            break;
        default:
            return 'Something went wrong';
    }

    return(
        <StyledTitleStatus className={classes}>
            <div className="titleStatus title_hangman"></div>
            <div className="titleStatus title_alright"></div>
            <div className="titleStatus title_gameover"></div>
        </StyledTitleStatus>
    );
}

const StyledTitleStatus = styled.div`
    width: 72%;
    height: 25%;
    position: absolute;
    top: 0;
    left: 14%;
    overflow: hidden;

    &.show_title_hangman {
        .title_hangman { top: 2%; }
        .title_alright { top: 100%; };
        .title_gameover { top: 100%; };
    }
    
    &.show_title_alright {
        .title_hangman { top: 100%; }
        .title_alright {};
        .title_gameover { top: 100%; };
    }
    
    &.show_title_gameover {
        .title_hangman { top: 100%; }
        .title_alright { top: 100%; };
        .title_gameover {};
    }

    .titleStatus {
        border: 1px solid red;   /* temp */
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        position: absolute;
        height: 100%;
        width: 100%;
        transition: all 0.3s ease-in-out;
        
        &.title_hangman { background-image: url(${title_hangman})};
        &.title_alright { background-image: url(${title_alright})};
        &.title_gameover { background-image: url(${title_gameover})};
    } 
`;

export default TitleStatus;
