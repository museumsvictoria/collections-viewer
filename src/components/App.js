import '../styles/main.scss';
import React from 'react';
import { hot } from 'react-hot-loader';
import ObjectGrid from '../containers/ObjectGrid';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ObjectGrid />
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
