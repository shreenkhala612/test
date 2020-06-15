import React,{Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


import splash from './splash';
import screen1 from './screen1';
import screen2 from './screen2';
import screen3 from './screen3';
import screen4 from './screen4';
import { SafeAreaView } from 'react-native-safe-area-context';

const AppNavigator=createStackNavigator(
    {
        splash:{screen:splash, navigationOptions: {
          header: null,
      },},
        S1:{screen:screen1, navigationOptions: {
          header: null,
      },},
        S2 :{screen :screen2, navigationOptions: {
          header: null,
      },},
        S3 :{screen :screen3, navigationOptions: {
          header: null,
      },},
        S4 :{screen :screen4, navigationOptions: {
          header: null,
      }},
        initialRouteName: 'splash'
      
    }
);
const AppContainer = createAppContainer(AppNavigator);
export default function App(){

      return (

      <AppContainer />
      );

}