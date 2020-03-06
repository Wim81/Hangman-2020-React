import React, { Component } from 'react';
import WordLetter from '../../components/WordLetter/WordLetter';

class Word extends Component {

    render() {
        return (
            <div className="word">
                <div className="word_letter">W</div>
                <div className="word_letter">O</div>
                <div className="word_letter">R</div>
                <div className="word_letter">D</div>
                <WordLetter />
                <WordLetter />
                <WordLetter />
            </div>
        );
    }
}

export default Word;