
import React from "react";
import PropTypes from 'prop-types'


class BasicInput1 extends React.Component{

    constructor(){
        super();
        this.state={
        fields : {
            name : '',
            email: '',
        },
        fieldErrors: {},   
        people: [],
        }
    }
    static propTypes = {
        department: PropTypes.string,
        course: PropTypes.string,
        onChange: PropTypes.func.isRequired,
    };
    componentWillReceiveProps(update) {
        this.setState({
        department: update.department,
        course: update.course,
        });
    }
    state = {
        department: null,
        course: null,
        courses: [],
        _loading: false,
    };
    validate = (person) => {
        const errors = {};
        if (!person.name) errors.name  = 'Name Required';
        if (!person.email) errors.email  = 'Email Required';
        return errors;
    };
    onFormSubmit = (evt) => {
        const people = [
        ...this.state.people,
        this.state.fields,
        ];
        const person = this.state.fields;
        this.setState({
            people: people.concat(person),
            fields: {
            name: '',
            email: ''
            }
        });
        const fieldErrors = this.validate(person);
        this.setState({ fieldErrors });
        evt.preventDefault();
    };
    onInputChange = (evt) => {
        const fields = this.state.fields;
        fields[evt.target.name] = evt.target.value;
        this.setState({ fields });
    };
    render(){
        return(
            <div>
                <h1>Basic Sign Up Form </h1>
                <form onSubmit={this.onFormSubmit}> 
                    <input 
                        placeholder='Name' 
                        name="name"
                        value={this.state.fields.name}
                        onChange={this.onInputChange}
                    >
                    </input>
                    <span style={{ color: 'red' }}>{ this.state.fieldErrors.name }</span>
                    <input 
                      placeholder="Email"
                      name="email"
                      value={this.state.fields.email}
                      onChange={this.onInputChange}
                    >
                    </input>
                    <span style={{ color: 'red' }}>{ this.state.fieldErrors.email }</span>    
                        
                    <input type="submit" />
                    </form>
                <div>
                <h3>Names</h3>
                    <ul>
                        { this.state.people.map(
                            ({ name, email }, i) => <li key={i}>{name} - {email}</li>
                                              ) 
                        }
                    </ul>
                </div>
            </div>

            
        );
    }
}
export default BasicInput1;