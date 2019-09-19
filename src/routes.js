import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer}from 'react-navigation';

import Main from './pages/Main';
import Intro from './pages/Intro';
export default Routes = createAppContainer(
  createStackNavigator({
    Intro,
    Main,

  },{
    defaultNavigationOptions:{
      headerTitle: 'Teste funcional'
    },
    mode: 'modal'
  })
);