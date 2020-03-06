import React, { Component } from 'react';
import Visuals from './containers/Visuals/Visuals';
import Word from './containers/Word/Word';
import Input from './containers/Input/Input';
import Help from './containers/Help/Help';
import './App.css';

const HangmanContext = React.createContext();

class HangmanProvider extends Component {
    state = {
        gameOver: false,        // boolean
        gameStatus: 'init',     // init / won / lost
        letters: {              // init / hit / mis
          a: 'init',
          b: 'init',
          c: 'init',
          d: 'init',
          e: 'init',
          f: 'init',
          g: 'init',
          h: 'init',
          i: 'init',
          j: 'init',
          k: 'init',
          l: 'init',
          m: 'init',
          n: 'init',
          o: 'init',
          p: 'init',
          q: 'init',
          r: 'init',
          s: 'init',
          t: 'init',
          u: 'init',
          v: 'init',
          w: 'init',
          x: 'init',
          y: 'init',
          z: 'init',
        },
        wrongLetterCount: 0,        // 0-7
        unknownLetterCount: null,   // total number of unknown letters in word
        selectedWord: null,         // word from library
        helpShown: false            // boolean
    }

    render() {
        return(
            <HangmanContext.Provider value={{state: this.state}}>
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
                <div className="temp">----</div>
                <Input />
                <Help />
            </div>
        </HangmanProvider>
        );
    }
}

export {HangmanContext};
export default App;