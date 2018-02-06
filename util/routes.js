import LoginScreen from "../components/login-screen";
import Home from "../components/Home";
import React , { Component } from 'react';

const mapNavigationStateParamsToProps = (SomeComponent) => {
  return class extends Component {
        render() {
            const {navigation, ...otherProps} = this.props
            const {state: {params}} = navigation
            return <SomeComponent {...this.props} {...params} />
        }
    }
}

const Routes = {
    Login: { screen: mapNavigationStateParamsToProps(LoginScreen) },
    Home: { screen: Home },
};

export default Routes;
