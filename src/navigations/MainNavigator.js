import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import EmployeeNavigator from './EmployeeNavigator';
import Loading from '../containers/loading'
import AuthStack from './AuthStack'
// import HomeContainer from '../containers/home';


const AppSwitchNavigator = createSwitchNavigator({
  Loading,
  AuthStack,
  // Event,
  Employee: EmployeeNavigator,
},{
  initialRouteName : 'Loading'
});

const AppContainer = createAppContainer(AppSwitchNavigator);
export default AppContainer;
