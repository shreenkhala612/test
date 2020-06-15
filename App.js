import React,{Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


import splash from './splash';
import S1 from './screen1';
import S2 from './screen2';
import S3 from './screen3';
import S4 from './screen4';

const App=createStackNavigator(
    {
        splash:{screen:splash,navigationOptions:{header:null}},
        S1:{screen:S1,navigationOptions:{header:null}},
        S2 :{screen :S2,navigationOptions:{header:null}},
        S3 :{screen :S3,navigationOptions:{header:null}},
        S4 :{screen :S4,navigationOptions:{header:null}},
        initialRouteName: 'S1'
      
    }
);
const AppContainer = createAppContainer(App);
export default class App extends Component {
    render() {
      return (
      <AppContainer navigation={props.navigation} />
       
      );
    }
  }
  