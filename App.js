
import React , { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore , applyMiddleware} from 'redux';
import LoginScreen from './components/LoginScreen'
import getRootReducer from './reducers';
import ReduxThunk from 'redux-thunk';
import { StackNavigator, addNavigationHelpers } from "react-navigation";

import Routes from "./util/routes";

const AppNavigator = StackNavigator(Routes, {});

const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};

@connect(state => ({
    nav: state.nav
}))

class AppWithNavigationState extends Component {
    render() {
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />
        );
    }
}

const rootReducer = getRootReducer(navReducer);

class App extends Component {

  render() {
    const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

export default App;
