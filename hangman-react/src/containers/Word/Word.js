import React, { Component } from 'react';
import { HangmanContext } from '../../App';
import WordLetter from '../../components/WordLetter/WordLetter';

class Word extends Component {

    render() {
        return (
            <div className="word">
                <HangmanContext.Consumer>
                    {(context) => {
                        const selectedWord = context.state.selectedWord;
                        let selectedWordArray = selectedWord.split('');
                        console.log(selectedWordArray);
                        const selectedWordItems = selectedWordArray.map( wordLetter => (
                            <WordLetter value={wordLetter} />
                        ))
                        return selectedWordItems;
                        }
                    }
                </HangmanContext.Consumer>

                {/*<div className="word_letter">W</div>
                <div className="word_letter">O</div>
                <div className="word_letter">R</div>
                <div className="word_letter">D</div>
                <WordLetter />
                <WordLetter />
                <WordLetter />*/}
            </div>
        );
    }
}

export default Word;