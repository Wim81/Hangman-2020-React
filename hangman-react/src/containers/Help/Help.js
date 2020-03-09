import React, { Component } from 'react';
import { HangmanContext } from '../../App';
import HelpSection from '../../components/HelpSection/HelpSection';

class Help extends Component {

    render() {
        return (
            <HangmanContext.Consumer>
                {(context) => {
                    return (
                        <HelpSection shown={context.state.helpShown} click={context.toggleHelpSection} />
                    );
                }
                }
            </HangmanContext.Consumer>
        );
    }
}

export default Help;