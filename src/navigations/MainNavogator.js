import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Auth from '../containers/auth';
import EmployeeNavigator from './EmployeeNavigator';
import Loading from '../containers/loading'
// import HomeContainer from '../containers/home';


const AppSwitchNavigator = createSwitchNavigator({
  Loading,
  Auth,
  Employee: EmployeeNavigator,
});

const AppContainer = createAppContainer(AppSwitchNavigator);
export default AppContainer;
