import React from 'react';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import { Icon } from 'react-native-elements';
import Sidebar from './components/Sidebar';
import Home from './screens/Home';
import Gallery from './screens/Gallery';
import Settings from './screens/Settings';
import List from './screens/List';
import Confidentiality from './screens/Confidentiality';

import LoginPage from './components/user/LoginPage';
import Contact from './screens/Contact';

const DrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: Home },
    Gallery: { screen: Gallery },
    LoginPage: { screen: LoginPage },
    Contact: { screen: Contact },
    List: { screen: List },
    Confidentiality: { screen: Confidentiality },
    Settings: { screen: Settings }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <Sidebar {...props} />
  }
);

const StackNavigator = createStackNavigator(
  {
    Drawer: { screen: DrawerNavigator }
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none",
  }
);


export default createAppContainer(StackNavigator);