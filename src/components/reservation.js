import React from 'react';
import PropTypes from 'prop-types';
import reservationlistStyles from './styles/reservationlist.module.css';

const Reservation = props => {
  const { reservation } = props;
  const date = reservation.date.substring(0, 10);
  const time = reservation.date.substring(11, 16);
  return (
    <div>
      <div className={reservationlistStyles.listcontainer}>
        <ul className={reservationlistStyles.list}>
          <li>
            <span className={reservationlistStyles.discription}>Name:</span>
            {' '}
            {reservation.store.name}
          </li>
          <li>
            <span className={reservationlistStyles.discription}>Location:</span>
            {' '}
            {reservation.store.location}
          </li>
          <li>
            <span className={reservationlistStyles.discription}>Date:</span>
            {' '}
            {date}
          </li>
          <li>
            <span className={reservationlistStyles.discription}>Time:</span>
            {' '}
            {time}
          </li>
        </ul>
      </div>
    </div>
  );
};

// Reservation.propTypes = { reservation: PropTypes.objectOf(PropTypes.string) };
Reservation.propTypes = {
  reservation: PropTypes.shape({
    date: PropTypes.string,
    store: PropTypes.shape({
      name: PropTypes.string,
      location: PropTypes.string,
    }),
  }),
};

Reservation.defaultProps = {
  reservation: {},
};

export default Reservation;
