import React from 'react';
import { connect } from 'react-redux';
import Registration from './auth/registration';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Registration />
      </div>
    );
  }
}

App.defaultProps = {
  getRestaurants: {},
};

const mapStateToProps = state => ({
  Loading: state.task.loading,
});

export default connect(
  mapStateToProps,
)(App);
