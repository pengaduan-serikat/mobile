import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Home from '../containers/home';
import Profile from '../containers/profile';

const AppStackNavigator = createBottomTabNavigator({
  Home,
  Profile,
});

const HomeContainer = createAppContainer(AppStackNavigator);
export default HomeContainer;
