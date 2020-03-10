import React, { Component } from 'react';
import styled from 'styled-components';

class VisualFrame extends Component {

    render() {
        return (
            <StyledVisualFrame>
                <div id="corner1"></div>
                <div id="corner2"></div>
                <div id="corner3"></div>
                <div id="corner4"></div>

                <div id="upper_content_outer">
                    <div id="upper_content_inner">
                    </div>
                </div>
            </StyledVisualFrame>
        );
    }
}

const StyledVisualFrame = styled.div`
    border: 1px solid blue;
    
`;

export default VisualFrame;