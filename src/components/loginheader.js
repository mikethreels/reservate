import React from 'react';
import Header from './styles/loginheader.module.css'
import { Link } from 'react-router-dom';

const TitleHeader = () => (
  <div className={Header.container}>
    <div className={Header.linkContainer}>
      <Link className={Header.homebutton} to="/overview">Home</Link>
      <Link className={Header.userpagebutton} to="/reservations">Reservations</Link>
    </div>
    <title title="name">ReservAte.com</title>
  </div>
);

export default TitleHeader;