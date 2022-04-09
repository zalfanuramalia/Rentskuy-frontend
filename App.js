import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Home from './src/screens/Home';
import Filter from './src/screens/Filter';
import Category from './src/screens/Category';
import AddNewItem from './src/screens/AddNewItem';
import ChatList from './src/screens/ChatList';
import History from './src//screens/History';
import Search from './src/screens/Search';
import Profile from './src/screens/Profile';
import Detail from './src/screens/Detail';
import Reservation from './src/screens/Reservation';
import Order from './src/screens/Order';
import Payment from './src/screens/Payment';
import SeeHistory from './src/screens/SeeHistory';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import ForgotPassword from './src/screens/ForgotPassword';
import ResetPassword from './src/screens/ResetPassword';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome5';
import UpdateProfile from './src/screens/UpdateProfile';
import {extendTheme, NativeBaseProvider, Stack} from 'native-base';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

import {Provider, useDispatch, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import stores from './src/redux/store';
import {getProfile} from './src/redux/actions/auth';

const StackAuth = createNativeStackNavigator();
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
      <HomeStack.Screen name="Add New Item" component={AddNewItem} />
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
      }}>
      <BottomTab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icons name="home" color={color} size={size} />
          ),
          tabBarShowLabel: false,
        }}
        name="Home Page"
        component={HomeStackNav}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icons name="search" color={color} size={size} />
          ),
          tabBarShowLabel: false,
        }}
        name="Search"
        component={Search}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icons name="th-list" color={color} size={size} />
          ),
          tabBarShowLabel: false,
        }}
        name="Histories"
        component={HistoryStackNav}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icons name="user" color={color} size={size} />
          ),
          tabBarShowLabel: false,
        }}
        name="Profile"
        component={Profile}
      />
    </BottomTab.Navigator>
  );
};

const theme = extendTheme({
  component: {
    Input: {
      baseStyle: {
        _light: {
          _focus: {
            // border: 'red.500',
          },
        },
      },
      variants: {
        coffee: {
          py: 5,
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: '#DFDEDE',
          borderColor: 'transparent',
          _focus: {
            borderColor: '#FFCD61',
          },
        },
      },
      sizes: {
        md: {
          fontSize: 'sm',
        },
      },
      defaultProps: {
        size: 'md',
      },
    },
  },
});

const Main = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile(auth.token));
  }, [auth.token, dispatch]);
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        {auth.token === null && (
          <StackAuth.Navigator>
            <StackAuth.Screen
              options={{
                headerShown: false,
              }}
              name="Login"
              component={Login}
            />
            <StackAuth.Screen
              options={{
                headerShown: false,
              }}
              name="Register"
              component={Signup}
            />
            <StackAuth.Screen
              options={{
                headerShown: false,
              }}
              name="Forgot Password"
              component={ForgotPassword}
            />
            <StackAuth.Screen
              options={{
                headerShown: false,
              }}
              name="Reset Password"
              component={ResetPassword}
            />
          </StackAuth.Navigator>
        )}
        {auth.token !== null && (
          <MainStack.Navigator screenOptions={{headerShown: false}}>
            <MainStack.Screen name="BottomTab" component={MainNav} />
            <MainStack.Screen name="Update Profile" component={UpdateProfile} />
            <MainStack.Screen name="Details" component={Detail} />
            <MainStack.Screen
              options={{
                animationEnabled: false,
                transitionConfig: () => ({
                  transitionSpec: {
                    duration: 0,
                    timing: 0,
                  },
                }),
              }}
              name="Reservation"
              component={Reservation}
            />
            <MainStack.Screen
              options={{
                animationEnabled: false,
                transitionConfig: () => ({
                  transitionSpec: {
                    duration: 0,
                    timing: 0,
                  },
                }),
              }}
              name="Order"
              component={Order}
            />
            <MainStack.Screen
              options={{
                animationEnabled: false,
                transitionConfig: () => ({
                  transitionSpec: {
                    duration: 0,
                    timing: 0,
                  },
                }),
              }}
              name="Payment"
              component={Payment}
            />
            <MainStack.Screen name="See History" component={SeeHistory} />
          </MainStack.Navigator>
        )}
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

const {store, persistor} = stores();

PushNotification.createChannel({
  channelId: 'rent-skuy',
  channelName: 'Notification Rentskuy',
});

const App = () => {
  const getToken = async () => {
    const token = await messaging().getToken();
    console.log(token);
  };
  useEffect(() => {
    getToken();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default App;
