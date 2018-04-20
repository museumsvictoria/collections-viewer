import '../styles/main.scss';
import React from 'react';
import { hot } from 'react-hot-loader';
import Grid from '../containers/Grid';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Grid />
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
