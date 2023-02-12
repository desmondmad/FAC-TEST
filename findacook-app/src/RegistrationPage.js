import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import BackButton from './components/BackButton';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import "./index.css";


function RegistrationPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birth, setBirth] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const today = new Date();
    const birthDate = new Date(birth);
    const age = today.getFullYear() - birthDate.getFullYear();
    if (!email.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")) {
      window.alert('Invalid email');
      return;
    }
    if (!password.match("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")) {
      window.alert('Password must contain 8 characters, an uppercase letter, a number and a special character');
      return;
    }
    if (age < 18) {
      window.alert('You must be at least 18 years old to register.');
      return;
    }
    
    // Logic for registering
      window.location.href = "/verify";
  };
  return (
    <><BackButton />
    <Link style={{textDecoration: 'none'}} to="/"><img id="loginLogo" alt="FindaCook logo" src="./images/logo-new-edit-01.png"/></Link>
    <form id="regisForm" onSubmit={handleSubmit}>
    <FormControl sx={{ width: '25ch' }}>
          <br />
          <TextField required variant="filled" helperText="Please enter your email" className='formInput' label="Email" value={email} onChange={(event) => setEmail(event.target.value)} inputProps={{ pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" }} />
          <br />
          <br />
          <TextField required variant="filled" helperText="Please enter your password" className='formInput' label="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} inputProps={{ pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"}}/>
          <br />
          <br />
          <TextField required variant="filled" helperText="Please enter your date of birth" id="regBirth" className='formInput' type="date" value={birth} onChange={(event) => setBirth(event.target.value)}/>          <br />
          <br />
          <br/>
            <button type="submit" className='btn' id="regBtn">Next</button>
    </FormControl>
      
      <hr></hr><h2> OR </h2>
      <h3>Sign-up with:</h3>
      <br />
      <img src="./images/twitIcon.png" id="twitSign" alt="Twitter Icon"></img>
      <img src="./images/fbIcon.png" id="fbSign" alt="Facebook Icon"></img>
      <img src="./images/googleIcon.png" id="gooSign" alt="Google Icon"></img>
      <br />
      <br />
      <br />
      <Link style={{textDecoration: 'none'}} to="/login"><p>Already have an account? Log in here</p></Link>
      
    </form></>
  );
}

export default RegistrationPage;
