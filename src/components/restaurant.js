import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import restaurantlistStyles from './styles/restaurantlist.module.css';

const Restaurant = props => {
  const { restaurant } = props;
  return (

    <Link className={restaurantlistStyles.object} to={`details/${restaurant.id}`}>
      <div>
        <span>
          {restaurant.name}
            &nbsp;
          <ul>
            <li className={restaurantlistStyles.listItem}>
              Location:
              {restaurant.location}
            </li>
          </ul>
        </span>
      </div>
    </Link>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    location: PropTypes.string,
    email: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
  }),
};

Restaurant.defaultProps = {
  restaurant: {},
};

export default Restaurant;
