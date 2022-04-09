import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {people} from '../image/index';
import {
  NativeBaseProvider,
  VStack,
  Box,
  Divider,
  Container,
  HStack,
  Pressable,
  ScrollView,
  Stack,
} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import Button from '../components/Button';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {getProfile} from '../redux/actions/auth';

const Profile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {auth} = useSelector(state => state);

  // useEffect(() => {
  //   dispatch(getProfile(auth.token));
  // }, [auth.token]);

  const handlerLogout = () => {
    dispatch({
      type: 'AUTH_LOGOUT',
    });

    if (auth.token == null) {
      navigation.navigate('Login');
    }
  };
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <ScrollView>
          <Box
            shadow="2"
            py="4"
            px="3"
            rounded="md"
            height={100}
            maxWidth="100%"
            style={styles.texts}>
            <HStack>
              <Box alignItems="center" style={styles.profile}>
                {/* <Stack direction="row" space={3} alignItems="center"> */}
                <Image
                  source={require('../../images/people-1.png')}
                  resizeMode="cover"
                  style={styles.profileImg}
                />
                <Text color="white" fontSize="xl" style={styles.name}>
                  {auth.userData.name}
                </Text>
                {/* </Stack> */}
                {/* <Pressable
                  rounded="xs"
                  bg="primary.400"
                  alignSelf="flex-start"
                  py="1"
                  px="3">
                  <Text
                    textTransform="uppercase"
                    fontSize="sm"
                    fontWeight="bold"
                    color="white">
                    Remind me
                  </Text>
                </Pressable> */}
              </Box>
            </HStack>
          </Box>
          <TouchableOpacity>
            <View style={styles.viewmore}>
              <Text style={styles.text}>Your Favourites</Text>
              <Icon name="chevron-right" size={20} />
            </View>
          </TouchableOpacity>
          <View style={styles.viewmore}>
            <Text style={styles.text}>FAQ</Text>
            <Icon name="chevron-right" size={20} />
          </View>
          <View style={styles.viewmore}>
            <Text style={styles.text}>Help</Text>
            <Icon name="chevron-right" size={20} />
          </View>
          <TouchableOpacity
            onPressIn={() =>
              navigation.navigate('Update Profile', {id: auth.userData.id})
            }>
            <View style={styles.viewmore}>
              <Text style={styles.text}>Update Profile</Text>
              <Icon name="chevron-right" size={20} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textinput}>
            <Button
              style={styles.buttons}
              title="Logout"
              onPress={handlerLogout}
            />
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  texts: {
    fontFamily: 'Roboto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImg: {
    borderRadius: 40,
  },
  profile: {
    flex: 1,
    flexDirection: 'row',
  },
  name: {
    marginHorizontal: 20,
    fontSize: 18,
  },
  viewmore: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  text: {
    paddingHorizontal: 10,
    fontSize: 20,
  },
  buttons: {
    borderRadius: 5,
    padding: 100,
  },
  textinput: {
    marginHorizontal: 15,
    marginVertical: 15,
    marginTop: 350,
  },
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   mainCardView: {
//     height: 90,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 15,
//     shadowOffset: {width: 0, height: 0},
//     shadowOpacity: 1,
//     shadowRadius: 8,
//     elevation: 8,
//     flexDirection: 'row',
//     paddingLeft: 16,
//     paddingRight: 14,
//     marginTop: 6,
//     marginBottom: 6,
//     marginLeft: 16,
//     marginRight: 16,
//   },
//   subCardView: {
//     height: 50,
//     width: 50,
//     borderRadius: 25,
//     borderWidth: 1,
//     borderStyle: 'solid',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default Profile;
