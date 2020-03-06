import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="visuals">
                    <div className="title">Titel/Status Messages</div>
                    <div className="image">Images</div>
                    <div className="text_attempts_left">Text Attempts left</div>
                    <div className="help_button">Help Button</div>
                    <div className="lets_play">Let's Play Animation</div>
                </div>
                <div className="word">
                    <div className="word_letter">W</div>
                    <div className="word_letter">O</div>
                    <div className="word_letter">R</div>
                    <div className="word_letter">D</div>
                </div>
                <div className="input">
                    <div className="letters">
                        <div className="letter">A</div>
                        <div className="letter">B</div>
                        <div className="letter">C</div>
                        <div className="letter">D</div>
                        <div className="letter">E</div>
                    </div>
                    <div className="new_word">New Word</div>
                </div>
                <div className="help">
                    <div className="help_content">help text comes here</div>
                </div>
            </div>
        );
    }
}

export default App;
