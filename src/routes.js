import { createStackNavigator, createAppContainer } from 'react-navigation';
import './config/StatusBarConfig';

import Index from './pages/Main';

const AppNavigator = createStackNavigator({
  'Main': {
    screen: Index,
    navigationOptions: {
      header: null
    },
  }
});

const App = createAppContainer(AppNavigator);

export default App;
