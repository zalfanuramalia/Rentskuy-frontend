import {View, Text} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import Filter from './src/screens/Filter';
import Category from './src/screens/Category';
import ChatList from './src/screens/ChatList';
import History from './src//screens/History';
import Search from './src/screens/Search';
import Profile from './src/screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import UpdateProfile from './src/screens/UpdateProfile';

const MainStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const HistoryTabTop = createMaterialTopTabNavigator();

const BottomTab = createBottomTabNavigator();

const HomeStackNav = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Filter" component={Filter} />
      <HomeStack.Screen name="Category" component={Category} />
    </HomeStack.Navigator>
  );
};

const HistoryStackNav = () => {
  return (
    <HistoryTabTop.Navigator screenOptions={{headerShown: false}}>
      <HistoryTabTop.Screen name="ChatList" component={ChatList} />
      <HistoryTabTop.Screen name="History" component={History} />
    </HistoryTabTop.Navigator>
  );
};

const MainNav = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarIcon: ({color, size}) => {
        //   return <Icon name="md-home" color="black" size="50" />;
        // },
      }}>
      <BottomTab.Screen name="Home Page" component={HomeStackNav} />
      <BottomTab.Screen name="Search" component={Search} />
      <BottomTab.Screen name="Histories" component={HistoryStackNav} />
      <BottomTab.Screen name="Profile" component={Profile} />
    </BottomTab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Home" component={Home} /> */}
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <MainStack.Screen name="BottomTab" component={MainNav} />
        <MainStack.Screen name="Update Profile" component={UpdateProfile} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
