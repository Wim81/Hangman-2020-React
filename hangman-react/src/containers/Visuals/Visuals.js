import React, { Component } from 'react';
import { HangmanContext } from '../../App';
import TitleStatus from '../../components/TitleStatus/TitleStatus';
import ErrorStatus from '../../components/ErrorStatus/ErrorStatus';

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
                    }
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
                      }

                  return(
                    <>
                      <TitleStatus value={titleStatusOutput} />
                      <div className="image">Images</div>
                      <ErrorStatus value={errorStatusOutput} />
                      <div className="text_attempts_left">Text Attempts left</div>
                      <div className="help_button">Help Button</div>
                      <div className="lets_play">Let's Play Animation</div>
                    </>
                  )}
                }
            </HangmanContext.Consumer>
            </div>
        );
    }
}

export default Visuals;
