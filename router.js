import BmiResult from './bmiResult';
import Home from './Home'
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const stackNavigation=createStackNavigator(
    {
        Home:Home,
      //  BmiResult:BmiResult,
},{
    defaultNavigationOptions:{
        header:null,
        gestureEnabled:false,
    },
    initialRouteName:'Home'
})

const AppContainer=createAppContainer(stackNavigation);
export default AppContainer