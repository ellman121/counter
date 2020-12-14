import React from 'react';
import { connect } from 'react-redux'

import { gameState } from '../redux/reducers/gameStateReducer'
import { gameStateReset, gameStateTransform } from '../redux/actions/gameActions'

class App extends React.Component {
  render() {
    return (
      <h1> Hello World! </h1>
    );
  }
}

export default connect(
  (s: {gameState: gameState}) => ({gameState: s.gameState}),
  { gameStateReset, gameStateTransform }
)(App);
