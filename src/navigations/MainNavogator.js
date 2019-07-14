import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Auth from '../containers/auth';
import EmployeeNavigator from './EmployeeNavigator';
// import HomeContainer from '../containers/home';


const AppSwitchNavigator = createSwitchNavigator({
  Auth,
  Employee: EmployeeNavigator,
});

const AppContainer = createAppContainer(AppSwitchNavigator);
export default AppContainer;
