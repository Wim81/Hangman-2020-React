import React, { Component } from 'react';
import { HangmanContext } from '../../App';
import TitleStatus from '../../components/TitleStatus/TitleStatus';
import StatusImage from '../../components/StatusImage/StatusImage';
import ErrorStatus from '../../components/ErrorStatus/ErrorStatus';
import HelpButton from '../../components/HelpButton/HelpButton';
import LetsPlayAnimation from '../../components/LetsPlayAnimation/LetsPlayAnimation';

class Visuals extends Component {


    render() {
        return (
            <div className="visuals">
            <HangmanContext.Consumer>
                {(context) => {
                  const titleStatusInput = context.state.gameStatus;
                  let titleStatusOutput = '';
                  switch (titleStatusInput) {
                      case 'init':
                        titleStatusOutput = 'Hangman';
                        break;
                      case 'in_progress':
                        titleStatusOutput = 'Hangman';
                        break;
                      case 'won':
                        titleStatusOutput = 'Alright!'
                        break;
                      case 'lost':
                        titleStatusOutput = 'Game Over';
                        break;
                      default:
                        return 'Something has gone wrong'
                    };
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
                          errorStatusOutput = '';
                          break;
                        case 1:
                          errorStatusOutput = 'Errors allowed: 5/6';
                          break;
                        case 2:
                          errorStatusOutput = 'Errors allowed: 4/6';
                          break;
                        case 3:
                          errorStatusOutput = 'Errors allowed: 3/6';
                          break;
                        case 4:
                          errorStatusOutput = 'Errors allowed: 2/6';
                          break;
                        case 5:
                          errorStatusOutput = 'Errors allowed: 1/6';
                          break;
                        case 6:
                          errorStatusOutput = 'Errors allowed: 0/6';
                          break;
                        case 7:
                          errorStatusOutput = '';
                          break;
                        default:
                          return 'Something has gone wrong'
                      };
                      const animationTrigger = context.state.gameStatus === 'init' ? 'yes' : 'no';
                      const toggleHelp = context.toggleHelpSection;

                  return(
                    <>
                      <TitleStatus value={titleStatusOutput} />
                      <StatusImage image={imageOutput} />
                      <ErrorStatus value={errorStatusOutput} />
                      <HelpButton click={toggleHelp} />
                      <LetsPlayAnimation trigger={animationTrigger} />
                    </>
                  )}
                }
            </HangmanContext.Consumer>
            </div>
        );
    }
}

export default Visuals;
