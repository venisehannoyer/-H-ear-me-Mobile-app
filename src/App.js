import React from 'react';
import {LogBox, View} from 'react-native';
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import {Icon} from 'react-native-elements';
import Sidebar from './components/Sidebar';
import Home from './screens/Home';
import Gallery from './screens/Gallery';
import Settings from './screens/Settings';
import RecognizeAudio from './screens/RecognizeAudio';
import Confidentiality from './screens/Confidentiality';

import LoginPage from './components/user/LoginPage';
import Contact from './screens/Contact';

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {screen: Home},
    Gallery: {screen: Gallery},
    LoginPage: {screen: LoginPage},
    //Contact: {screen: Contact},
    RecognizeAudio: {screen: RecognizeAudio},
    Confidentiality: {screen: Confidentiality},
    Settings: {screen: Settings}
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
    contentComponent: props => <Sidebar {...props} />,
  },
);

const StackNavigator = createStackNavigator(
  {
    Drawer: {screen: DrawerNavigator},
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none',
  },
);
const Navigator = createAppContainer(StackNavigator);
const App = () => {
  LogBox.ignoreAllLogs(true);

  return (
    <Navigator />

    // <>
    //   <View>
    //     <Navigator />
    //   </View>
    // </>
  );
};

export default App;
