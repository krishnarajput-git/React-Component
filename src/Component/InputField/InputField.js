import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Validators } from "../ValidatorFile/Validators";

const InputField =({type,value,label,placeholder,validator,onChange})=>{
    const [error,setError] = useState('innitalState',false);

    const handleChange = (event) =>{
        const {value} =event.target; 
        setError(Validators (validator,value));
        console.log(value);
    }
    return(
         <div>
             <div className="form-group">
               {label && <label htmlFor="app-input-field">{ label}</label>}
                <input 
                type={type}
                value={value}
                className="form-control" 
                placeholder={placeholder}
                onChange={handleChange}
                ></input>
             </div>
         </div>
     );

};

InputField.prototype = {
    type:PropTypes.string,
    value:PropTypes.string,
    label:PropTypes.string,
    placeholder:PropTypes.string,
    validator:PropTypes.array,
    // onChange:propTypes.func.isRequired
}

InputField.defaultProps ={
    type:'text',
    value:'',
    label:'',
    placeholder:'dnd',
    validator:[],
}



export default InputField;