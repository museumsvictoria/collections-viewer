import '../styles/main.scss';
import React from 'react';
import { hot } from 'react-hot-loader';
import Grid from '../containers/Grid';
import Notifications from '../containers/Notifications';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Notifications />
        <Grid />
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
