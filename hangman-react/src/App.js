import React, { Component } from 'react';
import Visuals from './containers/Visuals/Visuals';
import Word from './containers/Word/Word';
import Input from './containers/Input/Input';
import Help from './containers/Help/Help';
import axios from './axios-words';
import styled from 'styled-components';

const HangmanContext = React.createContext();

class HangmanProvider extends Component {
    state = {
        gameOver: false,                        // boolean
        gameStatus: 'init',                     // init / in_progress / won / lost
        letters: [
            { value: 'a', status: 'init' },      // init / hit / miss
            { value: 'b', status: 'init' },
            { value: 'c', status: 'init' },
            { value: 'd', status: 'init' },
            { value: 'e', status: 'init' },
            { value: 'f', status: 'init' },
            { value: 'g', status: 'init' },
            { value: 'h', status: 'init' },
            { value: 'i', status: 'init' },
            { value: 'j', status: 'init' },
            { value: 'k', status: 'init' },
            { value: 'l', status: 'init' },
            { value: 'm', status: 'init' },
            { value: 'n', status: 'init' },
            { value: 'o', status: 'init' },
            { value: 'p', status: 'init' },
            { value: 'q', status: 'init' },
            { value: 'r', status: 'init' },
            { value: 's', status: 'init' },
            { value: 't', status: 'init' },
            { value: 'u', status: 'init' },
            { value: 'v', status: 'init' },
            { value: 'w', status: 'init' },
            { value: 'x', status: 'init' },
            { value: 'y', status: 'init' },
            { value: 'z', status: 'init' },
        ],
        wrongLetterCount: 0,        // 0-7
        selectedWord: '',           // word from library (should be null, this is for testing purposes)
        helpShown: false            // boolean
    }

    componentDidMount() {
        let randomWordIndex = Math.floor(Math.random() * 7381);
        axios.get(`https://hangman-react-a7336.firebaseio.com/${randomWordIndex}.json`)
            .then(response => {
                this.setState({selectedWord: response.data.word});
            })
            .catch(error => {
                console.log("foutje");
            });
    }

    componentDidUpdate() {
      /*let unknownLetters = this.state.selectedWord.length;
      if (unknownLetters !== this.state.unknownLetterCount) {
        this.setState({
          unknownLetterCount: unknownLetters,
        });
      }*/
      let selectedWordArray = this.state.selectedWord.split('');
      let selectedWordArrayLength = selectedWordArray.length;
      console.log(selectedWordArray);
      console.log(selectedWordArrayLength);
      let checkLetterStatus = [];
      selectedWordArray.forEach(letter => {
        console.log(letter);
        let status= this.state.letters.find(x => x.value === letter).status;
        checkLetterStatus.push(status);
      });
      console.log(checkLetterStatus);
      const initIndex = checkLetterStatus.findIndex(el => el ==='init');
      console.log("INDEX " + initIndex);
      if (initIndex < 0 && this.state.gameOver === false) {
        this.setState({
            gameOver: true,
            gameStatus: 'won'
        });
      }
    }

    render() {
        return(
            <HangmanContext.Provider value={{
                state: this.state,
                initAll: () => {
                    const startArray = [];
                    let allLetters = this.state.letters;
                    var resetLetters = allLetters.map((letter) => {
                        startArray.push({
                            value: letter.value,
                            status: 'init'
                        });
                    })
                    let randomWordIndex = Math.floor(Math.random() * 7381);
                    axios.get(`https://hangman-react-a7336.firebaseio.com/${randomWordIndex}.json`)
                        .then(response => {
                            this.setState((prevState, props) => ({
                                gameOver: false,
                                gameStatus: 'init',
                                letters: startArray,
                                wrongLetterCount: 0,
                                selectedWord: response.data.word
                            }));
                        })
                        .catch(error => {
                            console.log("foutje");
                        });

                },
                handleInputLetterClick: (letter) => {
                    // update input letter status (to 'hit' or 'miss')
                    const letterInWordCheck = this.state.selectedWord.indexOf(letter);
                    let allLetters = this.state.letters;
                    let thisLetterIndex = allLetters.findIndex(object => object.value === letter);
                    let newLetter = letterInWordCheck !== -1 ? {value: letter, status: 'hit'} : {value: letter, status: 'miss'};
                    let allLettersNew = [...allLetters];
                    const updatedLetters = allLettersNew.splice(thisLetterIndex, 1, newLetter);
                    // update wrongLetterCount (& game status if it reaches its maximum of 7)
                    let newWrongLetterCount = letterInWordCheck !== -1 ? this.state.wrongLetterCount : this.state.wrongLetterCount + 1;
                    this.setState((prevState, props) => ({
                        letters: allLettersNew,
                        wrongLetterCount: newWrongLetterCount,
                        gameOver: newWrongLetterCount < 7 ? false : true,
                        gameStatus: newWrongLetterCount < 7 ? 'in_progress' : 'lost',
                    }), () => console.log(this.state));
                },
                toggleHelpSection: () => {
                    let newHelpShown = !this.state.helpShown;
                    this.setState({helpShown: newHelpShown});
                }
            }}>
                {this.props.children}
            </HangmanContext.Provider>
        );
    }
}

class App extends Component {
    render() {
        return (
            <StyledApp>
                <HangmanProvider>
                    <div className="App">
                        <Visuals />
                        <Word />
                        <Input />
                        <Help />
                    </div>
                </HangmanProvider>
            </StyledApp>
        );
    }
}

const StyledApp = styled.div`
  border: 1px solid red;
  text-align: center;
  background: linear-gradient(#000000, #686500 16.59%, #D3B42F 36.09%, #218206 50%, #D7A916 57.50%, #D7A916 79.86%, #666600 100%);
  width: 100vw;
  min-width: 300px;
  max-width: 520px;
  height: 187.5vw;
  min-height: 562.5px;
  max-height: 975px;
  margin: 0 auto;
`;

export {HangmanContext};
export default App;
