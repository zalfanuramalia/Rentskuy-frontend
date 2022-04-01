import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Button, NativeBaseProvider, Stack, Input, Radio} from 'native-base';
// import Button from '../components/Button';

const UpdateProfile = () => {
  const navigation = useNavigation();
  const [value, setValue] = React.useState('one');
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
        <View style={styles.main}>
          <Stack style={styles.forms}>
            <Text>Name :</Text>
            <Input
              variant="underlined"
              placeholder="Your Name"
              defaultValue="Samantha Doe"
            />
          </Stack>
        </View>
        <Radio.Group
          name="myRadioGroup"
          value={value}
          onChange={nextValue => {
            setValue(nextValue);
          }}>
          <Radio value="one" my="1">
            One
          </Radio>
          <Radio value="two" my="1">
            Two
          </Radio>
        </Radio.Group>
        <View>
          <Stack style={styles.forms}>
            <Text>Email Address :</Text>
            <Input
              variant="underlined"
              placeholder="Your Email Address"
              defaultValue="samanthadoe17@gmail.com"
            />
          </Stack>
          <Stack style={styles.forms}>
            <Text>Phone Number :</Text>
            <Input
              variant="underlined"
              placeholder="Your Phone Number"
              defaultValue="+62 81348287878"
            />
          </Stack>
          <Stack style={styles.forms}>
            <Text>Date of Birth :</Text>
            <Input
              variant="underlined"
              placeholder="Your Date of Birth"
              defaultValue="December 21th 1998"
            />
          </Stack>
          <Stack style={styles.forms}>
            <Text>Delivery Address :</Text>
            <Input
              variant="underlined"
              placeholder="Your Delivery Address"
              defaultValue="Iskandar Street Block A Number 102"
            />
          </Stack>
        </View>
        <TouchableOpacity style={styles.textinput}>
          <Button
            onPress={() => navigation.navigate('Profile')}
            size="lg"
            colorScheme="black">
            Save Change
          </Button>
        </TouchableOpacity>
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
  main: {
    marginTop: 50,
  },
  forms: {
    marginVertical: 10,
  },
});

export default UpdateProfile;
