import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as Action from '../../redux/actions/taskAction';
import authStyles from '../styles/new.module.css';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const session = useSelector(state => state.session);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (session[0].data.logged_in) {
      history.push('/overview');
    }
  }, [session]);

  const handleSubmit = async () => {
    let user = '';
    try {
      user = await Action.createSessionCall(email.target.value, password.target.value);
    } catch (err) {
      user = err;
    }
    if (!user.data) {
      setErrorMessage('Wrong Username or Password');
    } else {
      dispatch(Action.createSession(user));
      dispatch(Action.getRestaurants());
    }
  };

  return (
    <div className={authStyles.formcontainer}>
      <form action="">
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email.email}
          onChange={setEmail}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password.password}
          onChange={setPassword}
          required
        />
        <button onClick={handleSubmit} type="button">Login</button>
      </form>
      <div>{errorMessage}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  scores: state.users,
});

export default connect(mapStateToProps)(Login);
