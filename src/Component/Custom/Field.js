import React from "react";
import PropTypes from 'prop-types'; 
class Field extends React.Component{

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this)

    }
    static propTypes = {
        placeholder: PropTypes.string,
        name: PropTypes.string.isRequired,
        value: PropTypes.string,
        validate: PropTypes.func,
        onChange: PropTypes.func.isRequired,
        type: PropTypes.string,
    };
    state = {
        value: this.props.value,
        error: false,
       
    };
    componentWillReceiveProps(update) {
        this.setState({ value: update.value });
    }
    onChange (evt) {
        
        const name = this.props.name;
        const value = evt.target.value;
        console.log(value);
    }
    render() {
        return (
        <div>
            <input
                type ={this.props.type}
                name={this.props.name}
                placeholder={this.props.placeholder}
                // value={this.state.value}
                defaultValue="Hello!"
                onChange={this.onChange}
            />
            <span 
                style={{ color: 'red' }}>
                { this.state.error }
            </span>
        </div>
        );
    }

}

export default Field;