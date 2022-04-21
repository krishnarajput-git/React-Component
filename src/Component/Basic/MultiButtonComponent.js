import React from "react";
import BasicInput1 from "./BasicInput1";
class MultiButtonComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {message: 'Hello!'};
    }
    
    onGreatClick = (evt) => {
        const btn = evt.target;
        console.log(`The user clicked ${btn.name}: ${btn.value}`);
    };
    onAmazingClick = (evt) => {
        console.log('The user clicked button-2: amazing', evt);
    };

    render(){
        return(
            <div>
                <h1> Hi I'm Class Component</h1>
                <button 
                name="button-1"
                value="greate"
                onClick={this.onGreatClick}
                >
                Greate
                </button>
                | |
                <button 
                name="button-1"
                value="Amazing"
                onClick={this.onAmazingClick}
                >
                Amazing
                </button>
                <BasicInput1></BasicInput1>

            </div>
        );
    }
}

export default MultiButtonComponent;