import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList203620Navigator from '../features/NotificationList203620/navigator';
import Maps203619Navigator from '../features/Maps203619/navigator';
import BlankScreen1203617Navigator from '../features/BlankScreen1203617/navigator';
import BlankScreen0203616Navigator from '../features/BlankScreen0203616/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList203620: { screen: NotificationList203620Navigator },
Maps203619: { screen: Maps203619Navigator },
BlankScreen1203617: { screen: BlankScreen1203617Navigator },
BlankScreen0203616: { screen: BlankScreen0203616Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
