
import React , { Component } from 'react';
import LoginScreen from "../components/LoginScreen";
import Home from "../components/Home";
import GroupHome from "../components/GroupHome";

const Routes = {
    Login: { screen: LoginScreen},
    Home: { screen: Home },
    GroupHome: { screen: GroupHome}
};

export default Routes;
