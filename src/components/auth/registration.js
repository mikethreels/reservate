/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as Action from '../../redux/actions/taskAction';
import * as UserApi from '../../modules/apicall';
import authStyles from '../styles/new.module.css';

const Registration = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');
  const dispatch = useDispatch();
  const session = useSelector(state => state.session);

  const handleChange = e => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    } else {
      setPassword_confirmation(e.target.value);
    }
  };

  useEffect(() => {
    if (session[0].data.logged_in) {
      history.push('/overview');
    }
  }, [session]);

  const handleSubmit = async () => {
    const userObject = {
      user: {
        email,
        password,
        password_confirmation,
      },
    };
    await UserApi.addUser(userObject);
    let user = '';
    try {
      user = await Action.createSessionCall(email, password);
    } catch (err) {
      user = err;
    }
    dispatch(Action.createSession(user));
    dispatch(Action.getRestaurants());
    setEmail('');
    setPassword('');
    setPassword_confirmation('');
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
        <input
          type="password"
          name="password_confirmation"
          placeholder="Password confirmation"
          value={password_confirmation}
          onChange={handleChange}
          required
        />

        <button onClick={handleSubmit} type="button">Register</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  scores: state.users,
});

export default connect(mapStateToProps)(Registration);
