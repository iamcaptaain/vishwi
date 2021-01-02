import './App.css';
import axios from './axios';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    mobile: '',
  });

  const { first_name, last_name, email, mobile } = data;

  const onChangeInput = (e) => {
    // console.log(e.target.name);
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const onsubmitButton = (e) => {
    e.preventDefault();
    axios
      .post('/students', data,{
        headers: { "X-localization": localStorage.getItem("lan") }
      })
      .then(function (response) {
        console.log("Data is sucessfully submited"+response);
      })
      .catch(function (error) {
        console.log(error);
      });

  };
  return (
    <div className='wrapper'>
      <form className='myForm' onSubmit={onsubmitButton} encType="multipart/form-data">
        <div className='formInstructionsDiv formElement'>
          <h2 className='formTitle'>sign up</h2>
          <p className='instructionsText'>Demo Form for signup</p>
        </div>

        <div className='fillContentDiv formElement'>
          <div className='names formContentElement'>
            <input
              className='inputRequest '
              type='text'
              placeholder='First Name'
              name='first_name'
              value={first_name}
              onChange={(e) => onChangeInput(e)}
            />

            <input
              className='inputRequest '
              type='text'
              placeholder='Last Name'
              name='last_name'
              value={last_name}
              onChange={(e) => onChangeInput(e)}
            />
          </div>

          <label>
            <input
              className='inputRequest formContentElement'
              type='email'
              placeholder='Email'
              name='email'
              value={email}
              onChange={(e) => onChangeInput(e)}
            />
          </label>
          <label>
            <input
              className='inputRequest formContentElement'
              type='tel'
              placeholder='Phone number '
              name='mobile'
              value={mobile}
              onChange={(e) => onChangeInput(e)}
            />
          </label>
          <label>
            <input
              className='inputRequest formContentElement'
              type='file'
              accept='image/*'
            />
          </label>
        </div>
        <div className='submitButtonDiv formElement'>
          <button className='submitButton' >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
