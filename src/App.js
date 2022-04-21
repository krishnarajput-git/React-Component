import logo from './logo.svg';
import './App.css';
import ButtonComponent from './Component/Basic/ButtonComponent';
import MultiButtonComponent from  './Component/Basic/MultiButtonComponent';
import Field1 from './Component/Form/Field1';
import InputField from './Component/InputField/InputField';
import React, { useState } from "react";
import Form from './Component/Custom/Form';
function App() {
  const [value,setValue] = useState('innitalState','');

  const handlerChange =(value) =>{
    console.log(value);
    setValue(value);
  }; 

  return (
    <div className="App">
      <hr/>
      {/* <Field1></Field1> */}
      <Form></Form>

    
      
    </div>
  );
}

export default App;
