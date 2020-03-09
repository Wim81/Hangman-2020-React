import React, { Component } from 'react';
import { HangmanContext } from '../../App';
import TitleStatus from '../../components/TitleStatus/TitleStatus';

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
                      case 'won':
                        titleStatusOutput = 'Alright!'
                        break;
                      case 'lost':
                        titleStatusOutput = 'Game Over';
                        break;
                      default:
                        return 'Something has gone wrong'
                    }

                  return(
                    <>
                      <TitleStatus value={titleStatusOutput} />
                      <div className="image">Images</div>
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
