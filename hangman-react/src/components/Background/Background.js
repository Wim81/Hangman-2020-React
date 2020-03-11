import React, { Component } from 'react';
import { HangmanContext } from '../../App';
import styled from 'styled-components';

class Background extends Component {


    render() {
        return (
            <HangmanContext.Consumer>
                {(context) => {
                    console.log(context.state.gameStatus);
                    let bgStatus = '';
                    switch (context.state.gameStatus) {
                        case 'init':
                            bgStatus = 'default';
                            break;
                        case 'in_progress':
                            bgStatus = 'default';
                            break;
                        case 'won':
                            bgStatus = 'won'
                            break;
                        case 'lost':
                            bgStatus = 'lost';
                            break;
                        default:
                            return 'Something has gone wrong'
                    };



                    return(

                    <StyledBackground className={bgStatus}>
                        <div className="bg lost"></div>
                        <div className="bg won"></div>
                        <div className="bg default"></div>
                    </StyledBackground>
                    )}
                }
            </HangmanContext.Consumer>
        );
    }
}

const StyledBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -5;
    width: 100%;
    height: 100%;
    
    div.default {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -4;
        width: 100%;
        height: 100%;
        background: linear-gradient(#000000, #686500 16.59%, #D3B42F 36.09%, #218206 50%, #D7A916 57.50%, #D7A916 79.86%, #666600 100%);
    }
        
    div.won {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -3;
        transition: all 1s ease-in-out;
        width: 100%;
        height: 100%;
        background: linear-gradient(#195904, #686500 16.59%, #D3B42F 36.09%, #218206 50%, #D7A916 57.50%, #D7A916 79.86%, #666600 100%);
        opacity: 0;
    }
    
    div.lost {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -2;
        transition: all 1s ease-in-out;
        width: 100%;
        height: 100%;
        background: linear-gradient(#800000, #686500 16.59%, #D3B42F 36.09%, #218206 50%, #D7A916 57.50%, #D7A916 79.86%, #666600 100%);
        opacity: 0;
    }
    
    &.won {
        div.won { opacity: 1; }
    }
    
    &.lost {
        div.lost { opacity: 1; }
    }
    
`;

export default Background;
