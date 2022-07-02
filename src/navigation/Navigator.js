import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {IconButton, Colors} from 'react-native-paper';

import {useSelector} from 'react-redux';

import LoginScreen from '../screens/LoginScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SearchScreen from '../screens/SearchScreen';
import Search2Screen from '../screens/Search2Screen';
import ProfileScreen from '../screens/ProfileScreen';
import SplashScreen from '../screens/SplashScreen';
import OtherScreen from '../screens/OtherScreen';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{title: 'Sign In', headerShown: false}}
    />
    <AuthStack.Screen
      name="CreateAccountScreen"
      component={CreateAccountScreen}
      options={{title: 'Create Account', headerShown: false}}
    />
    <AuthStack.Screen
      name="ForgotPasswordScreen"
      component={ForgotPasswordScreen}
      options={{title: 'Forgot Password', headerShown: false}}
    />
  </AuthStack.Navigator>
);

const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack.Screen
      name="DetailsScreen"
      component={DetailsScreen}
      options={({route}) => ({
        title: 'Details',
        headerShown: false,
      })}
    />
  </HomeStack.Navigator>
);

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen
      name="SearchScreen"
      component={SearchScreen}
      options={{
        headerShown: false,
      }}
    />
    <SearchStack.Screen
      name="Search2Screen"
      component={Search2Screen}
      options={{
        headerShown: false,
      }}
    />
  </SearchStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
  </ProfileStack.Navigator>
);

const TabsScreen = props => {
  console.log('TabsScreen: ', props);
  const {navigation} = props;

  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({color, size}) => (
            <IconButton icon="home" color={color} size={size} />
          ),
          headerLeft: props => {
            console.log('HeaderLeft props: ', props);
            return (
              <IconButton
                icon="menu"
                size={props.size}
                onPress={() => navigation.openDrawer()}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Search"
        component={SearchStackScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({color, size}) => (
            <IconButton icon="magnify" color={color} size={size} />
          ),
          headerLeft: props => {
            console.log('HeaderLeft props: ', props);
            return (
              <IconButton
                icon="menu"
                size={props.size}
                onPress={() => navigation.openDrawer()}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Other"
        component={OtherScreen}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false, // if you don't want to see the tab bar
          headerShown: true,
          tabBarIcon: ({color, size}) => (
            <IconButton icon="magnify" color={color} size={size} />
          ),
          headerLeft: props => {
            console.log('HeaderLeft props: ', props);
            return (
              <IconButton
                icon="menu"
                size={props.size}
                onPress={() => navigation.openDrawer()}
              />
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('Main', {screen: 'Home'})}
      />
      <DrawerItem
        label="Search"
        onPress={() => props.navigation.navigate('Main', {screen: 'Search'})}
      />
      <DrawerItem
        label="Other"
        onPress={() => props.navigation.navigate('Other')}
      />
      <DrawerItem
        label="Profile"
        onPress={() => props.navigation.navigate('Profile')}
      />
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Main" drawerContent={CustomDrawerContent}>
    <Drawer.Screen
      name="Main"
      component={TabsScreen}
      options={{headerShown: false}}
    />
    <Drawer.Screen name="Profile" component={ProfileStackScreen} />
  </Drawer.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({loggedIn}) => (
  <RootStack.Navigator>
    {loggedIn ? (
      <RootStack.Screen
        name="App"
        component={DrawerScreen}
        options={{
          animationEnabled: false,
          headerShown: false,
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
          headerShown: false,
        }}
      />
    )}
  </RootStack.Navigator>
);

const Navigator = () => {
  const {loggedIn} = useSelector(state => state.authReducer);
  const [isLoading, setIsLoading] = React.useState(true);

  console.log('Logged: ', loggedIn);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <LoginScreen />;
  }

  return (
    <NavigationContainer>
      <RootStackScreen loggedIn={loggedIn} />
    </NavigationContainer>
  );
};

export default Navigator;
