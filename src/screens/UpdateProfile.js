import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Button, NativeBaseProvider} from 'native-base';

const UpdateProfile = () => {
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <View flexDirection="row">
            <Icon name="chevron-left" size={20} />
            <Text style={styles.text}>Update Profile</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.image}>
          <Image
            source={require('../../images/people-1.png')}
            style={styles.profileImg}
          />
          <View>
            <Button
              style={styles.button}
              height="10"
              variant="outline"
              colorScheme="success">
              Take a Picture
            </Button>
            <Button
              style={styles.button}
              height="10"
              variant="outline"
              colorScheme="success">
              Browse from gallery
            </Button>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  update: {
    flex: 1,
    flexDirection: 'row',
    // width: '100%',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // marginTop: 20,
    // paddingHorizontal: 10,
  },
  text: {
    paddingHorizontal: 10,
    fontSize: 20,
  },
  profileImg: {
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  image: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginTop: 50,
  },
  button: {
    width: '50%',
    color: 'black',
  },
});

export default UpdateProfile;
