import axios from 'axios';
import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as Action from '../../redux/actions/taskAction';
import authStyles from '../styles/new.module.css';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = () => {
    axios
      .post(
        'https://reservate-api.herokuapp.com//v1/sessions',
        {
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then(response => {
        dispatch(Action.createSession(response));
        history.push('/overview');
      });
  };

  return (
    <div className={authStyles.formcontainer}>
      <form action="">
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          required
        />
        <button onClick={handleSubmit} type="button">Login</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  scores: state.users,
});

export default connect(mapStateToProps)(Login);
