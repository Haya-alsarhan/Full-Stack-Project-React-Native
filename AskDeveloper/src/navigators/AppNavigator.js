import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addNavigationHelpers, StackNavigator} from 'react-navigation';
import loggedOut from '../screens/loggedOut';
import LogIn from '../screens/LogIn';
import ForgotPassword from '../screens/ForgotPassword';
import LoggedIn from '../screens/LoggedIn';

export const AppNavigator = StackNavigator (
{
  loggedOut:{ screens:loggedOut },
  LogIn: { screens: LogIn },
  LoggedIn: {screens: LoggedIn},
  ForgotPassword: { screens: ForgotPassword},

});

const AppWithNavigationState = ({ dispatch, nav, listener}) => (
<AppNavigator navigation= {addNavigationHelpers({dispatch, state: nav, addListener:listener})} />
);

AppWithNavigationState.PropTypes = {

dispatch:PropTypes.func.isRequired,
nav:PropTypes.object.isRequired,
};

const mapStateToProps = state => ({

  nav: state.nav,
});

export default connect (mapStateToProps) (AppWithNavigationState);
