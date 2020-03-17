import React, { Component } from 'react';
import { HangmanContext } from '../../App';
import WordLetter from '../../components/WordLetter/WordLetter';
import styled from 'styled-components';

class Word extends Component {

    render() {
        return (
            <StyledWord>
                <HangmanContext.Consumer>
                    {(context) => {
                        const gameOver = context.state.gameOver;
                        const letterStatus = context.state.letters;
                        const checkLetterStatus = (letterInstance) => {
                            return letterStatus.find(letter => letter.value === letterInstance).status;
                        }
                        const selectedWord = context.state.selectedWord;

                        const selectedWordLength = context.state.selectedWordLength;
                        let wordSize = '';
                        if (selectedWordLength < 9) {
                            wordSize = 'small';
                        } else if (selectedWordLength < 12) {
                            wordSize = "medium"
                        } else {
                            wordSize = 'large'
                        }
                        console.log("WORD SIZE = " + wordSize);

                        let selectedWordArray = selectedWord.split('');
                        console.log(selectedWordArray);
                        let wordWithUnknownsArray = [];
                        let updateWordWithUnknownsArray = selectedWordArray.map( letter => {
                            console.log(letter);
                            const check = checkLetterStatus(letter);
                            console.log(check);
                            if (check === 'hit') {
                                wordWithUnknownsArray.push({value: letter, status: "ok"});
                            } else if (gameOver) {
                                wordWithUnknownsArray.push({value: letter, status: "unfound"});
                            } else {
                                wordWithUnknownsArray.push({value: "_", status: "ok"});
                            }
                        });

                        console.log(wordWithUnknownsArray);

                        const selectedWordItems = wordWithUnknownsArray.map( wordLetter => (
                            <WordLetter value={wordLetter.value} status={wordLetter.status} wordsize={wordSize} />
                        ))
                        return selectedWordItems;
                        }
                    }
                </HangmanContext.Consumer>
            </StyledWord>
        );
    }
}

const StyledWord = styled.div`
    height: 10%;
    display: flex;
    justify-content: center;
    margin: 0 5%;
`;

export default Word;