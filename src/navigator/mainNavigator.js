import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps147389Navigator from '../features/Maps147389/navigator';
import Add-Item147388Navigator from '../features/Add-Item147388/navigator';
import Maps147384Navigator from '../features/Maps147384/navigator';
import UserProfile147380Navigator from '../features/UserProfile147380/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps147389: { screen: Maps147389Navigator },
Add-Item147388: { screen: Add-Item147388Navigator },
Maps147384: { screen: Maps147384Navigator },
UserProfile147380: { screen: UserProfile147380Navigator },

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
