import React, { Component } from 'react';
import { HangmanContext } from '../../App';
import WordLetter from '../../components/WordLetter/WordLetter';

class Word extends Component {

    render() {
        return (
            <div className="word">
                <HangmanContext.Consumer>
                    {(context) => {
                        const letterStatus = context.state.letters;
                        // console.log(letterStatus);

                        const checkLetterStatus = (letterInstance) => {
                            return letterStatus.find(letter => letter.value === letterInstance).status;
                        }

                        const selectedWord = context.state.selectedWord;
                        let selectedWordArray = selectedWord.split('');
                        console.log(selectedWordArray);
                        let wordWithUnknownsArray = [];
                        let updateWordWithUnknownsArray = selectedWordArray.map( letter => {
                            console.log(letter);
                            const check = checkLetterStatus(letter);
                            console.log(check);
                            if (check === 'hit') {
                                wordWithUnknownsArray.push({value: letter, status: "ok"});
                            } else {
                                wordWithUnknownsArray.push({value: "_", status: "ok"});
                            }
                        });

                        console.log(wordWithUnknownsArray);

                        const selectedWordItems = wordWithUnknownsArray.map( wordLetter => (
                            <WordLetter value={wordLetter.value} />
                        ))
                        return selectedWordItems;
                        }
                    }
                </HangmanContext.Consumer>
            </div>
        );
    }
}

export default Word;