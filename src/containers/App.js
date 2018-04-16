import '../styles/main.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return <div>It works!</div>;
  }
}

App.propTypes = {
  system: PropTypes.object.isRequired,
};

function mapStateToProps({ system }) {
  return {
    system,
  };
}

export default hot(module)(connect(mapStateToProps, null)(App));
