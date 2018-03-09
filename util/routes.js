
import React , { Component } from 'react';
import LoginScreen from "../components/LoginScreen";
import Home from "../components/Home";
import GroupHome from "../components/GroupHome";
import TopicScreen from "../components/TopicScreen";
import SliderTestScreen from "../components/tests/SliderTestScreen";

const Routes = {
    Login: { screen: LoginScreen },
    Home: { screen: Home },
    GroupHome: { screen: GroupHome},
    TopicScreen: { screen: TopicScreen}
};

export default Routes;
