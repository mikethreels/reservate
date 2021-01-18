import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import restaurantlistStyles from './styles/restaurantlist.module.css'

export const Driver = props => {
  const { restaurant } = props;
  console.log(restaurant.id)
  return (

      <Link className={restaurantlistStyles.object} to={`details/${restaurant.id}`} >
        <div>
          <span>
            {restaurant.name}
            &nbsp;
            <ul>
              <li className={restaurantlistStyles.listItem}>Location: {restaurant.location}</li>
            </ul>
          </span>
        </div>
      </Link>
  );
};

Driver.propTypes = { driver: PropTypes.object };

Driver.defaultProps = {
  driver: {},
};

export default Driver;