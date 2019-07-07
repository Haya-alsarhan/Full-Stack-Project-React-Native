
import React, {Component} from 'react';
import { provider } from 'react-redux';
import store from './src/redux/store';
import SplashScreen from 'react-native-splash-screen';
import { createReduxBoundAddListener } from 'react-navigation-reux-helpers';
import AppWithNavigationState from './src/navigators/AppNavigator';

console.disableYellowBox = true ;

export default class App extends Component<Props> {
    componentDidMount() {
      SplashScreen.hide()
    }

  render() {
    return (
<Provider store ={store}>
      < AppWithNavigationState listener={ createReduxBoundAddListener ('root')}

      />
      </Provider>
    );
  }
}
