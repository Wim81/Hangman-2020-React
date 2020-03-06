import React, { Component } from 'react';

class Input extends Component {

    render() {
        return (
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
        );
    }
}

export default Input;