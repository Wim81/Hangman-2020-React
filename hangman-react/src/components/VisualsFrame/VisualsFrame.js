import React, { Component } from 'react';
import styled from 'styled-components';

class VisualFrame extends Component {

    render() {
        return (
            <StyledVisualFrame>
                <div className="corner1"></div>
                <div className="corner2"></div>
                <div className="corner3"></div>
                <div className="corner4"></div>

                <div className="upper_content_outer">
                    <div className="upper_content_inner">
                    </div>
                </div>
            </StyledVisualFrame>
        );
    }
}

const StyledVisualFrame = styled.div`
    border: 1px solid blue;
    width: 100%;
    height: 100%;
    position: relative;
    
.corner1 {
    position: absolute;
    width: 8.33%;
    height: 0;
    padding-top: 12%;
    padding-left: 3.75%;
    overflow: hidden;
}

.corner1:after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    margin-top:-500px;
    border-top: 500px solid transparent;
    border-right: 500px solid #dbaa16;
}

.corner2 {
    position: absolute;
    right: 2%;    
    width: 8.33%;
    height: 0;
    padding-top: 3.75%;
    padding-bottom: 8.25%;
    padding-right: 3.75%;
    overflow: hidden;
}

.corner2:after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-right: 500px solid transparent;
    border-bottom: 500px solid #dbaa16;
}

.corner3 {
    position: absolute;
    width: 5.83%;
    height: 0;
    top: 85%;
    padding-left: 12%;
    padding-top: 8.25%;
    overflow: hidden;
}

.corner3:after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    margin-left:-500px;
    margin-top:-500px; 
    border-left: 500px solid transparent;
    border-top: 500px solid #000000;
}

.corner4 {
    position: absolute;
    width: 5.83%;
    height: 0;
    top: 85%;
    right: 2%;
    padding-bottom: 12%;
    padding-left: 8.33%;
    overflow: hidden;
}

.corner4:after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    margin-left: -500px;
    border-bottom: 500px solid transparent;
    border-left: 500px solid #000000;
}

.upper_content_outer {
    position: relative;
    top: 1.66%;
    left: 3.125%;
    width: 93.75%;
    height: 95%;
    clip-path: polygon(0% 13.33%, 13.33% 13.33%, 13.33% 0%, 86.66% 0%, 86.66% 13.33%, 100% 13.33%, 100% 86.66%, 86.66% 86.66%, 86.66% 100%, 13.33% 100%, 13.33% 86.66%, 0% 86.66%);
    
    background: linear-gradient(#dbaa16, #000000 100%);
}

.upper_content_inner {
    position: relative;
    top: 1%;
    left: 0.9%;
    width: 98.2%;
    height: 98.2%;
    clip-path: polygon(0% 13.33%,13.33% 13.33%, 13.33% 0%, 86.66% 0%, 86.66% 13.33%, 100% 13.33%, 100% 86.33%, 86.66% 86.33%, 86.66% 100%, 13.33% 100%, 13.33% 86.33%, 0% 86.33%);
   
    background: linear-gradient(#000000, #686500 33.19%, #D3B42F 72.18%, #218206);
}
`;

export default VisualFrame;