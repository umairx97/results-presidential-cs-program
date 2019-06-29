import React, { Component } from "react";
import { connect } from "react-redux";
import { AsyncAddUser } from "./Store/middlewares/AsyncAddUser";
import Copyright from './components/Copyright/Copyright'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPoll } from '@fortawesome/free-solid-svg-icons'


class App extends Component {
  render() {
    return (
      <div className='mainWrapper'>
        <h1 className="text-center mt-4 text-success font-weight-bold">Welcome To PIAIC Results Portal</h1>

        <div className="text-center mt-4" >
          <FontAwesomeIcon icon={faPoll} size = "3x"/>
          <h3>Check Results</h3>
        </div>
        <Copyright />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.dummy_reducer.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    AsyncAddUser: data => dispatch(AsyncAddUser(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
