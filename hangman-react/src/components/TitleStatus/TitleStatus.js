import React, { Component } from 'react';
import { HangmanContext } from '../../App';
import styled, { keyframes } from 'styled-components';
import title_hangman from '../../assets/title_hangman.png';
import title_alright from '../../assets/title_alright.png';
import title_gameover from '../../assets/title_gameover.png';

class TitleStatus extends Component {

    render() {
        return (
            <HangmanContext.Consumer>
                {(context) => {
                    let bgImg = context.state.gameStatus;
                    let classes = null;
                    switch (bgImg) {
                        case 'init':
                            classes = "show_title_hangman";
                            break;
                        case 'in_progress':
                            classes = "show_title_hangman";
                            break;
                        case 'won':
                            classes = "show_title_alright";
                            break;
                        case 'lost':
                            classes = "show_title_gameover";
                            break;
                        default:
                            return 'Something went wrong';
                    }

                    return (
                        <StyledTitleStatus className={classes}>
                            <div className="titleStatus title_hangman"></div>
                            <div className="titleStatus title_game_end"></div>
                        </StyledTitleStatus>
                    );
                }
            }
            </HangmanContext.Consumer>
        );
    }
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
    /*overflow: hidden;*/

    &.show_title_hangman {
        .title_hangman { animation: ${keyFramesMoveIn} 0.6s ease-in-out forwards; };
        .title_game_end { animation: ${keyFramesMoveOut} 0.6s ease-in-out forwards; };
    }
    
    &.show_title_alright {
        .title_hangman { animation: ${keyFramesMoveOut} 0.6s ease-in-out forwards; };
        .title_game_end { background-image: url(${title_alright}); animation: ${keyFramesMoveIn} 0.6s ease-in-out forwards; };
    }
    
    &.show_title_gameover {
        .title_hangman { animation: ${keyFramesMoveOut} 0.6s ease-in-out forwards; };
        .title_game_end { background-image: url(${title_gameover}); animation: ${keyFramesMoveIn} 0.6s ease-in-out forwards; };
    }

    .titleStatus {
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        position: absolute;
        top: 100%;
        height: 100%;
        width: 100%;
    }
   
    .title_hangman { background-image: url(${title_hangman})};
    .title_game_end { border: 5px solid lime }
`;

export default TitleStatus;
