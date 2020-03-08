import React, { Component } from 'react';
import { HangmanContext } from '../../App';
import InputLetter from '../../components/InputLetter/InputLetter';
import NewWordButton from '../../components/NewWordButton/NewWordButton';
import '../../style.css';

class Input extends Component {

    render() {
        return (
            <div className="input">
                <div className="letters">
                    <HangmanContext.Consumer>
                        {(context) => {
                            const letters = context.state.letters;
                            // console.log(letters);
                            const allLetters = letters.map( letter => (
                                <InputLetter
                                    key={letter.value}
                                    value={letter.value}
                                    status={letter.status}
                                    click={() => context.handleInputLetterClick(letter.value)} />
                            ))
                            // console.log(allLetters);
                            return allLetters;
                            }
                        }
                    </HangmanContext.Consumer>
                </div>
                <HangmanContext.Consumer>
                    {(context) => {
                        return <NewWordButton click={() => {context.initInputLetters(); context.newWordFromDb() }} />;
                        }
                    }
                </HangmanContext.Consumer>

            </div>
        );
    }
}

export default Input;