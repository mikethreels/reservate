import React from 'react'
import reservationlistStyles from './styles/reservationlist.module.css'

const Reservation = props => {
  const { reservation } = props;
  console.log(reservation)
  return (
    <div>
      <div className={reservationlistStyles.listcontainer}>
        <ul className={reservationlistStyles.list}>
          <li>{reservation.store.name}</li>
          <li>{reservation.store.location}</li>
          <li>{reservation.date}</li>
        </ul>
      </div>
    </div>
  )
}

export default Reservation
