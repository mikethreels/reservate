import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from './restaurant';
import restaurantlistStyles from './styles/restaurantlist.module.css';

const Restaurantlist = props => {
  const { restaurants } = props;

  return (
    <div className={restaurantlistStyles.restaurantlistcontainer}>
      <div className={restaurantlistStyles.objectContainer}>
        {restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} />)}
      </div>
    </div>
  );
};

Restaurantlist.propTypes = { restaurants: PropTypes.objectOf(PropTypes.string) };

Restaurantlist.defaultProps = {
  restaurants: {},
};

const mapStateToProps = state => ({
  restaurants: state.task.restaurants,
});

export default connect(
  mapStateToProps,
)(Restaurantlist);
