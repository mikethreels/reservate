import React, { useState } from 'react'
import { connect } from 'react-redux';
import * as UserApi from '../../modules/apicall'
import { useHistory } from "react-router-dom";
import authStyles from '../styles/new.module.css'

const Registration = () => {
  let history = useHistory();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPassword_confirmation] = useState('')

  const handleChange = e => {
    console.log(`email: ${email}, password: ${password}, password_confirmation: ${password_confirmation}`)
    if (e.target.name === 'email') {
      setEmail(e.target.value)
    }else if (e.target.name === 'password') {
      setPassword(e.target.value)
    }else {
      setPassword_confirmation(e.target.value)
    }
  }
  
  const handleSubmit = e => {
    const userObject = {
      user: {
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
    };
    console.log("handle submit", userObject)
    UserApi.addUser(userObject);
    setEmail('')
    setPassword('')
    setPassword_confirmation('')
    history.push('/sign_in')
  };

  return (
    <div className={authStyles.formcontainer}>
      <form action="">
        <input 
          type='email' 
          name='email' 
          placeholder='email' 
          value={email} 
          onChange={handleChange} 
          required 
        />
        <input 
          type='password' 
          name='password' 
          placeholder='Password' 
          value={password} 
          onChange={handleChange} 
          required 
        />
        <input 
          type='password' 
          name='password_confirmation' 
          placeholder='Password confirmation' 
          value={password_confirmation} 
          onChange={handleChange} 
          required 
        />

        <button onClick={handleSubmit} type='button'>Register</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  scores: state.users,
});

export default connect(mapStateToProps)(Registration);