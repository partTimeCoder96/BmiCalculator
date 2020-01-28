/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

// import ReduxThunk from 'redux-thunk';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Router from './router';
import {Provider} from 'react-redux';
import Store from './redux/store/store';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Router />
        </Provider>
    );
  }
}
export default App;
