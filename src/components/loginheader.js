import React from 'react';
import Header from './styles/loginheader.module.css'
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as Action from '../redux/actions/taskAction'

const TitleHeader = props => {
  let history = useHistory();
  const { session } = props;
  const dispatch = useDispatch()
  
  const handleSubmit = e => {
    dispatch(Action.destroySession())
    history.push('/')
  }
  return (
    <div className={Header.container}>
      <title title="name">ReservAte.com</title>
      <div className={Header.linkContainer}>
        <Link className={Header.homebutton} to="/overview">Home</Link>
        <Link className={Header.userpagebutton} to="/reservations">Reservations</Link>
      </div>
      <div className={Header.userEmail}>
        <span>{session[0].data.user.email}</span>
        <button className={Header.signoutbutton} onClick={handleSubmit} type='button'>Sign Out</button>
      </div>
    </div>
  )
  };

const mapStateToProps = state => ({
  session: state.session
});

export default connect(mapStateToProps)(TitleHeader);