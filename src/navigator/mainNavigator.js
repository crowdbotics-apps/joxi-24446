import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile203677Navigator from '../features/UserProfile203677/navigator';
import Maps203658Navigator from '../features/Maps203658/navigator';
import Settings203636Navigator from '../features/Settings203636/navigator';
import Settings203621Navigator from '../features/Settings203621/navigator';
import NotificationList203620Navigator from '../features/NotificationList203620/navigator';
import Maps203619Navigator from '../features/Maps203619/navigator';
import BlankScreen1203617Navigator from '../features/BlankScreen1203617/navigator';
import BlankScreen0203616Navigator from '../features/BlankScreen0203616/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile203677: { screen: UserProfile203677Navigator },
Maps203658: { screen: Maps203658Navigator },
Settings203636: { screen: Settings203636Navigator },
Settings203621: { screen: Settings203621Navigator },
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
