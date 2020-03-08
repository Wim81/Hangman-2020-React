import React from 'react';
import { HangmanContext } from '../../App';

const WordLetter = (props) => {
    return(
        <div className="word_letter">
            <HangmanContext.Consumer>
                {(context) => (
                    <span>{props.value}</span>  // nog te vervangen, test voor context api
                )}
            </HangmanContext.Consumer>
        </div>
    );
}

export default WordLetter;