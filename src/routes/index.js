// import React from 'react';
import React from 'react';
import { Dimensions } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  // createBottomTabNavigator,
} from 'react-navigation';
import LoginPage from '../screens/Login';
import HomePage from '../screens/Home';
import Shopping from '../screens/Shopping';
import Profile from '../screens/Profile';
import Gallery from '../screens/Gallery';
import {
  HomeHeader,
  ProfileHeader,
  BaseHeader,
} from '../components/customHeaders';
import DrawerContent from '../screens/DrawerContent';

const AuthRoutes = createStackNavigator(
  {
    Login: LoginPage,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login',
  },
);

const AppRoutes = createStackNavigator(
  {
    Home: {
      screen: HomePage,
      navigationOptions: ({ navigation }) => ({
        header: <HomeHeader navigation={navigation} />,
      }),
    },
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        header: <ProfileHeader navigation={navigation} />,
      }),
    },
    Shopping: {
      screen: Shopping,
      navigationOptions: ({ navigation }) => ({
        header: <BaseHeader title="SHOPPING" navigation={navigation} />,
      }),
    },
    Gallery: {
      screen: Gallery,
      navigationOptions: ({ navigation }) => ({
        header: <BaseHeader title="GALLERY" navigation={navigation} />,
      }),
    },
  },
  {
    // headerMode: 'none',
    initialRouteName: 'Home',
  },
);

const DrawerNavigatorApp = createDrawerNavigator(
  {
    Dashboard: {
      screen: AppRoutes,
    },
    // 'Beneficiaries & Payees': {
    //   screen: BeneficiaryRoutesStack,
    // },
  },
  {
    contentComponent: DrawerContent,
    drawerWidth: Dimensions.get('window').width * 0.8,
    contentOptions: {
      inactiveBackgroundColor: '#fff',
    },
  },
);

const SwitchNavigatorApp = createSwitchNavigator(
  {
    AuthRoutes: AuthRoutes,
    AppRoutes: DrawerNavigatorApp,
  },
  {
    initialRouteName: 'AppRoutes',
  },
);

const AppContainer = createAppContainer(SwitchNavigatorApp);

export default AppContainer;
