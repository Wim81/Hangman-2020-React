import React from 'react';
import styled, { keyframes } from 'styled-components';
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

const keyFramesMoveIn = keyframes`
    0% { top: 100%; opacity: 1; }
    100% {top: 0%; opacity: 1;} 
`;

const keyFramesMoveOut = keyframes`
    0% { top: 0%; opacity: 1; }
    50% { top: 0%; opacity: 1; }
    99% { top: -100%; opacity: 1; }
    100% {top: 100%; opacity: 1;} 
`;

const StyledTitleStatus = styled.div`
    width: 72%;
    height: 25%;
    position: absolute;
    top: 2%;
    left: 14%;
    overflow: hidden;

    &.show_title_hangman {
        .title_hangman { animation: ${keyFramesMoveIn} 0.6s ease-in-out forwards; }
        .title_alright { animation: ${keyFramesMoveOut} 0.6s ease-in-out forwards; };
        .title_gameover { animation: ${keyFramesMoveOut} 0.6s ease-in-out forwards; };
    }
    
    &.show_title_alright {
        .title_hangman { animation: ${keyFramesMoveOut} 0.6s ease-in-out forwards; }
        .title_alright { animation: ${keyFramesMoveIn} 0.6s ease-in-out forwards; };
        .title_gameover {  };
    }
    
    &.show_title_gameover {
        .title_hangman { animation: ${keyFramesMoveOut} 0.6s ease-in-out forwards; }
        .title_alright {  };
        .title_gameover { animation: ${keyFramesMoveIn} 0.6s ease-in-out forwards; };
    }

    .titleStatus {
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        position: absolute;
        top: 100%;
        height: 100%;
        width: 100%;
        
        &.title_hangman { background-image: url(${title_hangman})};
        &.title_alright { background-image: url(${title_alright});};
        &.title_gameover { background-image: url(${title_gameover});};
    }
   
`;

export default TitleStatus;
