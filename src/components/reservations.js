import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import reservationlistStyles from './styles/reservationlist.module.css';
import Reservation from './reservation';

const Reservations = props => {
  const { reservation } = props;
  return (
    <div className={reservationlistStyles.mainContainer}>
      <div className={reservationlistStyles.objectContainer}>
        {reservation.map(reserv => <Reservation key={Math.random()} reservation={reserv} />)}
      </div>
    </div>
  );
};

Reservations.propTypes = {

  reservation: PropTypes.arrayOf(PropTypes.string),
};

Reservations.defaultProps = {

  reservation: [],
};

const mapStateToProps = state => ({
  session: state.session,
  reservation: state.reservation,
});

export default connect(mapStateToProps)(Reservations);
