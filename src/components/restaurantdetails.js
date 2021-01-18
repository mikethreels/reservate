/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import detailStyles from './styles/restaurantdetail.module.css';

const restaurantDetails = props => {
  const { restaurants, session} = props;
  const { restaurantId } = useParams();
  const restId = parseInt(restaurantId)
  console.log(session)
  console.log(`restaurantDetails ${restId === restaurants[0].id} ${typeof restaurants[0].id.toString()}`)
  const currentRestaurant = restaurants.find(c => c.id === restId);
  return (
    <div className={detailStyles.container}>
      <Link className={detailStyles.backbutton} to={'/overview'} >Go back</Link>
      <div>
        <h1>
          {currentRestaurant.name}
        </h1>
      </div>
    </div>
  );
};

restaurantDetails.propTypes = { restaurant: PropTypes.object };

restaurantDetails.defaultProps = {
  restaurant: {},
};


const mapStateToProps = state => ({
  restaurants: state.task.restaurants,
  session: state.session
});

export default connect(mapStateToProps)(restaurantDetails);