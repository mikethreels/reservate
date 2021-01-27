import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import reservationlistStyles from './styles/reservationlist.module.css';
import Reservation from './reservation';

const Reservations = props => {
  const { session } = props;
  const { reservations } = session[0].data.user;
  return (
    <div className={reservationlistStyles.mainContainer}>
      <div className={reservationlistStyles.objectContainer}>
        {reservations.map(reserv => <Reservation key={Math.random()} reservation={reserv} />)}
      </div>
    </div>
  );
};

Reservations.propTypes = { session: PropTypes.objectOf(PropTypes.string) };

Reservations.defaultProps = {
  session: {},
};

const mapStateToProps = state => ({
  session: state.session,
});

export default connect(mapStateToProps)(Reservations);
