import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { getRestaurants } from '../redux/actions/taskAction';
import Registration from './auth/registration';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // componentDidMount() {
  //   const { getRestaurants } = this.props;
  //   getRestaurants();
  // }

  render() {
    return (
      <div>
        <Registration />
      </div>
    );
  }
}

// App.propTypes = { getRestaurants: PropTypes.func };

App.defaultProps = {
  getRestaurants: {},
};

const mapStateToProps = state => ({
  Loading: state.task.loading,
});

// const mapDispatchToProps = dispatch => ({
//   getRestaurants: () => dispatch(getRestaurants()),
// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(App);
