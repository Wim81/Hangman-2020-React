import React, { Component } from 'react';
import { HangmanContext } from '../../App';
import VisualsFrame from '../../components/VisualsFrame/VisualsFrame';
import TitleStatus from '../../components/TitleStatus/TitleStatus';
import StatusImage from '../../components/StatusImage/StatusImage';
import ErrorStatus from '../../components/ErrorStatus/ErrorStatus';
import HelpButton from '../../components/HelpButton/HelpButton';
import LetsPlayAnimation from '../../components/LetsPlayAnimation/LetsPlayAnimation';
import styled from 'styled-components';

class Visuals extends Component {

    render() {
        return (
            <HangmanContext.Consumer>
                {(context) => {
                    const imageInput = context.state.wrongLetterCount;
                    let imageOutput = '';
                    switch (imageInput) {
                        case 0:
                          imageOutput = 'image_0';
                          break;
                        case 1:
                          imageOutput = 'image_1';
                          break;
                        case 2:
                          imageOutput = 'image_2';
                          break;
                        case 3:
                          imageOutput = 'image_3';
                          break;
                        case 4:
                          imageOutput = 'image_4';
                          break;
                        case 5:
                          imageOutput = 'image_5';
                          break;
                        case 6:
                          imageOutput = 'image_6';
                          break;
                        case 7:
                          imageOutput = 'image_7';
                          break;
                        default:
                          return 'Something has gone wrong'
                      };
                    const errorStatusInput = context.state.wrongLetterCount;
                    let errorStatusOutput = '';
                    switch (errorStatusInput) {
                        case 0:
                          errorStatusOutput = 'default';
                          break;
                        case 1:
                          errorStatusOutput = 'errors_left_5';
                          break;
                        case 2:
                          errorStatusOutput = 'errors_left_4';
                          break;
                        case 3:
                          errorStatusOutput = 'errors_left_3';
                          break;
                        case 4:
                          errorStatusOutput = 'errors_left_2';
                          break;
                        case 5:
                          errorStatusOutput = 'errors_left_1';
                          break;
                        case 6:
                          errorStatusOutput = 'errors_left_0';
                          break;
                        case 7:
                          errorStatusOutput = 'default';
                          break;
                        default:
                          return 'Something has gone wrong'
                      };
                      const animationTrigger = context.state.gameStatus === 'init' ? 'yes' : 'no';
                      const toggleHelp = context.toggleHelpSection;
                      const helpButtonShown = context.state.gameStatus === "init";
                      const transitionStatus1 = !context.state.gameOver;
                      const transitionStatus2 = context.state.gameStatus;

                  return(
                    <StyledVisuals>
                      <VisualsFrame />
                      <TitleStatus mode1={transitionStatus1} mode2={transitionStatus2} />
                      <StatusImage image={imageOutput} />
                      <ErrorStatus value={errorStatusOutput} />
                      <HelpButton click={toggleHelp} show={helpButtonShown} />
                      <LetsPlayAnimation trigger={animationTrigger} />
                    </StyledVisuals>
                  )}
                }
            </HangmanContext.Consumer>
        );
    }
}

const StyledVisuals = styled.div`
    position: relative;
    height: 52%;
`;

export default Visuals;
