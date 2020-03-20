import React, { Component } from 'react';
import { HangmanContext } from '../../App';
import InputLetter from '../../components/InputLetter/InputLetter';
import NewWordButton from '../../components/NewWordButton/NewWordButton';
import '../../style.css';
import styled from 'styled-components';

class Input extends Component {

    render() {
        return (
            <StyledInput>
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
                                    gameOver={context.state.gameOver}
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
                        return <NewWordButton gameOver={context.state.gameOver} click={() => { context.initAll(); }} />;
                        }
                    }
                </HangmanContext.Consumer>

            </StyledInput>
        );
    }
}

const StyledInput = styled.div`
    height: 38%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    
    .letters {
        height: 66%;
        flex: 1 1 auto;
        margin: 0 5% 32px 5%;
        display: flex;
        justify-content: center;
    }
`;

export default Input;
