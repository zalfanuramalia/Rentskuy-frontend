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
import uploads from '../../images/upload.png';

const Profile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {auth} = useSelector(state => state);

  useEffect(() => {
    dispatch({
      type: 'CLEAR_ERR',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            height={250}
            maxWidth="100%"
            style={styles.texts}>
            <HStack>
              <Box alignItems="center">
                {/* <Stack direction="row" space={3} alignItems="center"> */}
                {auth.userData?.image ? (
                  <Image
                    source={{uri: `${auth.userData.image}`}}
                    resizeMode="cover"
                    style={styles.profileImg}
                    width={90}
                    height={90}
                  />
                ) : (
                  <Text>Set your picture</Text>
                )}
                <Box style={styles.info}>
                  <Text color="white" fontSize="xl" style={styles.name}>
                    {auth.userData?.name}
                  </Text>
                  <Text color="white" fontSize="xl" style={styles.name}>
                    {auth.userData?.email}
                  </Text>
                  <Text color="white" fontSize="xl" style={styles.name}>
                    {auth.userData?.number
                      ? auth.userData?.number
                      : 'Set your phone number'}
                  </Text>
                </Box>
              </Box>
            </HStack>
          </Box>
          <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
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
    borderRadius: 45,
  },
  profile: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  name: {
    marginHorizontal: 20,
    fontSize: 18,
    marginTop: 5,
  },
  info: {
    alignItems: 'center',
    marginTop: 20,
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
    marginTop: 190,
  },
});

export default Profile;
