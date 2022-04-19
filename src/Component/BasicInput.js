
import React from "react";

class BasicInput extends React.Component{

    constructor(){
        super();
        this.state={
            names:[],
        }
    }
    onFormSubmit = (evt) => {
        const name = this.refs.name.value;
        const names = [ ...this.state.names, name ];
        this.setState({ names: names });
        this.refs.name.value = '';
        evt.preventDefault();
    };
    render(){
        return(
            <div>
                <h1>Basic Sign Up Form </h1>
                <form onSubmit={this.onFormSubmit}> 
                    <input type="text" placeholder='Name' ref='name' name="Name"></input>
                        <input type="submit" />
                    </form>
                <div>
                <h3>Names</h3>
                    <ul>
                        { this.state.names.map(
                            (name, i) => <li key={i}>{name}</li>
                                              ) 
                        }
                    </ul>
                </div>
            </div>

            
        );
    }
}
export default BasicInput;