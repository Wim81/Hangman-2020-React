import React, { Component } from 'react';
import { HangmanContext } from '../../App';
import styled, { keyframes } from 'styled-components';
import { Transition } from 'react-transition-group';
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
                            <Transition
                                in={this.props.mode1}
                                timeout={2000}
                                onEnter={() => console.log('entering')}
                                onEntered={() => console.log('entered')}
                                onExit={() => console.log('exiting')}
                                onExited={() => console.log('exited')}>
                                {state => (
                                    <div className="titleStatus title_hangman"></div>
                                )}
                            </Transition>
                            <Transition in={this.props.mode2} timeout={2000}>
                                {state => (
                                    <div className="titleStatus title_game_end"></div>
                                )}
                            </Transition>
                        </StyledTitleStatus>
                    );
                }
            }
            </HangmanContext.Consumer>
        );
    }
}

/*const keyFramesMoveIn = keyframes`
    0% { top: 100%; opacity: 1; }
    100% {top: 0%; opacity: 1;} 
`;

const keyFramesMoveOut = keyframes`
    0% { top: 0%; opacity: 1; }
    50% { top: 0%; opacity: 1; }
    99% { top: -100%; opacity: 1; }
    100% {top: 100%; opacity: 1;} 
`;
*/
const StyledTitleStatus = styled.div`
    width: 72%;
    height: 25%;
    position: absolute;
    top: 2%;
    left: 14%;
    /*overflow: hidden;*/

    &.show_title_hangman {
        .title_hangman { opacity: 1; };
        .title_game_end { opacity: 0; };
    }
    
    &.show_title_alright {
        .title_hangman { opacity: 0; };
        .title_game_end { opacity: 1; background-image: url(${title_alright}); };
    }
    
    &.show_title_gameover {
        .title_hangman { opacity: 0; };
        .title_game_end { opacity: 1; background-image: url(${title_gameover}); };
    }

    .titleStatus {
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        position: absolute;
        /*top: 100%;*/
        height: 100%;
        width: 100%;
    }
   
    .title_hangman { background-image: url(${title_hangman})};
    .title_game_end { /*border: 5px solid lime*/ }
`;

export default TitleStatus;
