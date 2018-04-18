import '../styles/main.scss';
import React from 'react';
import { hot } from 'react-hot-loader';
import Typekit from 'react-typekit';
import ObjectGrid from '../containers/ObjectGrid';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ObjectGrid />
        <Typekit kitId="mkm3pqn" />
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
