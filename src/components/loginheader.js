import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './styles/loginheader.module.css';

import * as Action from '../redux/actions/taskAction';

const TitleHeader = props => {
  const history = useHistory();
  const { session } = props;
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(Action.destroySession());
    history.push('/');
  };
  return (
    <div className={Header.container}>
      <title title="name">ReservAte.com</title>
      <div className={Header.linkContainer}>
        <Link className={Header.homebutton} to="/overview">Home</Link>
        <Link className={Header.userpagebutton} to="/reservations">Reservations</Link>
      </div>
      <div className={Header.userEmail}>
        <span>{session[0].data.user.email}</span>
        <button className={Header.signoutbutton} onClick={handleSubmit} type="button">Sign Out</button>
      </div>
    </div>
  );
};

TitleHeader.propTypes = { session: PropTypes.arrayOf(PropTypes.object) };

TitleHeader.defaultProps = {
  session: {},
};

const mapStateToProps = state => ({
  session: state.session,
});

export default connect(mapStateToProps)(TitleHeader);
