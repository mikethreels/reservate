
import React from 'react'
import { getRestaurants } from '../redux/actions/taskAction';
import { connect } from 'react-redux';
import Registration from './auth/registration';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
    this.props.getRestaurants();
  }
  render() {
    return (
      <div>
        <Registration />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  Loading: state.task.loading
});

const mapDispatchToProps = dispatch => {
  return {
    getRestaurants: () => dispatch(getRestaurants())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
