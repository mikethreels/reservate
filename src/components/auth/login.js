import axios from 'axios';
import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import * as Action from '../../redux/actions/taskAction'
import authStyles from '../styles/new.module.css'
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = e => {
    if (e.target.name === 'email') {
      setEmail(e.target.value)
    }else {
      setPassword(e.target.value)
    }
  }
  
  const handleSubmit = e => {
    // const userObject = {
    //   email: email,
    //   password: password
    // }

    axios
      .post(
        "http://192.168.8.102:3001/v1/sessions",
        {
          email: email,
          password: password
        },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      )
      .then(response => {
        console.log(response)
        dispatch(Action.createSession(response))
      })
    history.push('/overview')
  }

  // const handleSubmit = e => {
  //   const userObject = {
  //       email: email,
  //       password: password,
  //   };
  //   console.log("handle submit login", userObject)
  //   UserApi.createSession(userObject);
  // };

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
        <button onClick={handleSubmit} type='button'>Login</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  scores: state.users,
});

export default connect(mapStateToProps)(Login);