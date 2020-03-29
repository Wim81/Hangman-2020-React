import React from 'react';
import styled from 'styled-components';

const HelpSection = (props) => {
    let classes = props.shown ? "help_section_outer shown" : "help_section_outer";

    return(
        <StyledHelpSection className={classes} onClick={props.click}>
            <div className="help_section_inner">
                <div className="help_text">
                    <div className="help_title">HANGMAN HELP</div>
                    <p>Make an attempt to find the word hidden behind the underscores in the middle of the screen by selecting the letters you believe will be found in this word.</p>
                    <p>Whenever you select a letter which is correct, all instances of that letter will be shown in the word and the letter’s button will be highlighted in green.</p>
                    <p>Whenever you select a letter which is incorrect, the letter’s button will be highlighted in
                        red.</p>
                    <p>Once you have selected 7 incorrect letters, the game is over and you will no longer be able to save the beautiful girl.</p>
                    <p>Make sure this does not happen!</p>
                    <p>Enjoy the game!</p>
                </div>
            </div>
        </StyledHelpSection>
    );
}

const StyledHelpSection = styled.div`
   background-color: transparent;
   display: none;
   cursor: pointer;
   background-color: rgba(0, 0, 0, 0.2);
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   z-index: 999;
   
   &.shown {
    display: block;
   }
   
   & > .help_section_inner {
     background-color: #dbaa16;
     margin: 5%;
     width: 90%;
     height: 95%;
     
     .help_text {
        padding: 5%;
        font-family: 'WV_HM2';
        font-size: 0.9rem;
        
        @media (min-width: 420px) {
            font-size: 1.2rem;
        }
        
        .help_title {
            font-family: 'WV_HM';
            color: #195904;
            font-size: 2rem;
            padding: 5% 0;
            
            @media (min-width: 420px) {
                font-size: 4rem;
            }
        }
   }
`;

export default HelpSection;