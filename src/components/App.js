import '../styles/main.scss';
import React from 'react';
import { hot } from 'react-hot-loader';
import Grid from './Grid';
import ObjectModal from './ObjectModal';
import Notifications from './Notifications';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Notifications />
        <ObjectModal />
        <Grid />
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
