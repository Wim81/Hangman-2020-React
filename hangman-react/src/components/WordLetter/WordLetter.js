import React from 'react';
import App, { HangmanContext } from '../../App';

const WordLetter = (props) => {
    return(
    //<HangmanContext.Consumer>
        <div className="word_letter">
            <HangmanContext.Consumer>
                {(context) => (
                    <span>A {context.state.selectedWord}</span>  // nog te vervangen, test voor context api
                )}
            </HangmanContext.Consumer>
        </div>
    //</HangmanContext.Consumer>
    );
}

export default WordLetter;