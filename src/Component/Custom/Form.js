import React from "react";
import Field from "./Field";
import CourseSelect from "./CourseSelect";

class Form extends React.Component{
    constructor() {
        super();
        this.state = {
            people: '',
            fields: {
                name: '',
                email: ''
            }
        }
    }

    onInputChange = ({ name, value, error }) => {
        const fields = this.state.fields;
        const fieldErrors = this.state.fieldErrors;
        fields[name] = value;
        fieldErrors[name] = error;
        this.setState({ fields, fieldErrors });
    };
    onFormSubmit = (evt) => {
        const people = this.state.people;
        const person = this.state.fields;
        evt.preventDefault();
        if (this.validate()) return;
        this.setState({
            people: people.concat(person),
            fields: {
            name: '',
            email: '',
            },
        });
    };
    validate () {
        const person = this.state.fields;
        const fieldErrors = this.state.fieldErrors;
        if (!person.name) return true;
        if (!person.email) return true;
        if (!person.course) return true;
        if (!person.department) return true;
        return false
    }    
    render() {
        return (
            <div>
            <h1>Sign Up Sheet</h1>
            <form onSubmit={this.onFormSubmit}>

                <Field
                type='text'
                placeholder='Name'
                name='name'
                value={this.state.fields.name}
                onChange={this.onInputChange}
                validate={(val) => (val ? false : 'Name Required')}
                />
                <br/>
                <br/>

                <Field
                type='number'
                placeholder='Phone Number'
                name='phone'
                value={this.state.fields.name}
                onChange={this.onInputChange}
                validate={(val) => (val ? false : 'Phone Number Required')}
                />
            <br />
               <CourseSelect 
               department ={this.state.fields.department}
               course={this.state.fields.course}
               onChange={this.onInputChange}
               />



            <br />
                <input type='submit' disabled={this.validate()} />
            </form>
            <div>
                <h3>People</h3>
               
            </div>
            </div>
            
        );
    }
}

export default Form;