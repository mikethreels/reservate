import React from 'react'
import { connect } from 'react-redux';
import reservationlistStyles from './styles/reservationlist.module.css'
import Reservation from './reservation'

const Reservations = props => {
  const { session } = props;
  console.log(session[0].data.user.reservations)
  const reservations = session[0].data.user.reservations
  console.log(`reservations ${reservations}`)
  return (
    <div className={reservationlistStyles.mainContainer}>
      <div className={reservationlistStyles.objectContainer}>
        {reservations.map(reservation => <Reservation key={Math.random()} reservation={reservation} />)}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  session: state.session
});

export default connect(mapStateToProps)(Reservations);
