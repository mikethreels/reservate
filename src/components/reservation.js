import React from 'react'
import reservationlistStyles from './styles/reservationlist.module.css'

const Reservation = props => {
  const { reservation } = props;
  const date = reservation.date.substring(0, 10);
  const time = reservation.date.substring(11, 16);
  console.log(reservation)
  return (
    <div>
      <div className={reservationlistStyles.listcontainer}>
        <ul className={reservationlistStyles.list}>
          <li><span className={reservationlistStyles.discription}>Name:</span> {reservation.store.name}</li>
          <li><span className={reservationlistStyles.discription}>Location:</span> {reservation.store.location}</li>
          <li><span className={reservationlistStyles.discription}>Date:</span> {date}</li>
          <li><span className={reservationlistStyles.discription}>Time:</span> {time}</li>
        </ul>
      </div>
    </div>
  )
}

export default Reservation
