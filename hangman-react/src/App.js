import React, { Component } from 'react';
import Visuals from './containers/Visuals/Visuals';
import Word from './containers/Word/Word';
import Input from './containers/Input/Input';
import Help from './containers/Help/Help';
import axios from './axios-words';
import './App.css';

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
        unknownLetterCount: null,   // total number of unknown letters in word
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
      let unknownLetters = this.state.selectedWord.length;
      if (unknownLetters !== this.state.unknownLetterCount) {
        this.setState({
          unknownLetterCount: unknownLetters,
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
                                unknownLetterCount: null,
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
        <HangmanProvider>
            <div className="App">
                <Visuals />
                <Word />
                <Input />
                <Help />
            </div>
        </HangmanProvider>
        );
    }
}

export {HangmanContext};
export default App;
