import React, { Component } from 'react';
import { HangmanContext } from '../../App';
import InputLetter from '../../components/InputLetter/InputLetter';
import '../../style.css';

class Input extends Component {

    render() {
        return (
            <div className="input">
                <div className="letters">
                    <HangmanContext.Consumer>
                        {(context) => {
                            const letters = context.state.letters;
                            console.log(letters);
                            const allLetters = letters.map( letter => (
                                <InputLetter key={letter.value} value={letter.value} status={letter.status} />
                            ))
                            console.log(allLetters);
                            return allLetters;
                            }
                        }
                    </HangmanContext.Consumer>
                </div>
                <div className="new_word">New Word</div>
            </div>
        );
    }
}

export default Input;