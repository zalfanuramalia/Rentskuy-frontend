import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  Button,
  NativeBaseProvider,
  Stack,
  Input,
  Radio,
  Box,
} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {getProfile} from '../redux/actions/auth';
// import Button from '../components/Button';

const UpdateProfile = () => {
  const navigation = useNavigation();
  const [value, setValue] = React.useState('one');
  const {auth} = useSelector(state => state);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    setName(auth.userData.name);
    setEmail(auth.userData.email);
    setMobileNumber(auth.userData.number);
    setBirthdate(auth.userData.birthdate);
    setAddress(auth.userData.address);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <NativeBaseProvider>
      <Box style={styles.main}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <View flexDirection="row">
            <Icon name="chevron-left" size={20} />
            <Text style={styles.text}>Update Profile</Text>
          </View>
        </TouchableOpacity>
        <Box style={styles.image}>
          <Image
            source={require('../../images/people-1.png')}
            style={styles.profileImg}
          />
          <View>
            <Button
              style={styles.button}
              height="10"
              variant="solid"
              _text={{
                color: 'black',
                fontSize: 'sm',
              }}>
              Take a Picture
            </Button>
            <Button
              style={styles.button}
              height="10"
              variant="solid"
              _text={{
                color: 'black',
                fontSize: 'sm',
              }}>
              Browse from gallery
            </Button>
          </View>
        </Box>
        <Box style={styles.update}>
          <Stack style={styles.forms}>
            <Text>Name :</Text>
            <Input
              variant="underlined"
              placeholder="Your Name"
              // defaultValue={auth.userData.name}
              value={name}
              onChange={setName}
            />
          </Stack>
          <View style={styles.radio}>
            <Box>
              <Radio.Group
                name="myRadioGroup"
                value={value}
                style={styles.gender}
                onChange={nextValue => {
                  setValue(nextValue);
                }}>
                <Radio value="female" my="1">
                  Female
                </Radio>
              </Radio.Group>
            </Box>
            <Box>
              <Radio.Group
                name="myRadioGroup"
                value={value}
                onChange={nextValue => {
                  setValue(nextValue);
                }}>
                <Radio value="male" my="1">
                  Male
                </Radio>
              </Radio.Group>
            </Box>
          </View>
          <Stack style={styles.forms}>
            <Text>Email Address :</Text>
            <Input
              variant="underlined"
              placeholder="Your Email Address"
              value={email}
              onChange={setEmail}
            />
          </Stack>
          <Stack style={styles.forms}>
            <Text>Phone Number :</Text>
            <Input
              variant="underlined"
              placeholder="Your Phone Number"
              value={mobileNumber}
              onChange={setMobileNumber}
            />
          </Stack>
          <Stack style={styles.forms}>
            <Text>Date of Birth :</Text>
            <Input
              variant="underlined"
              placeholder="Your Date of Birth"
              value={birthdate}
              onChange={setBirthdate}
            />
          </Stack>
          <Stack style={styles.forms}>
            <Text>Delivery Address :</Text>
            <Input
              variant="underlined"
              placeholder="Your Delivery Address"
              value={address}
              onChange={setAddress}
            />
          </Stack>
          <TouchableOpacity style={styles.textinput}>
            <Button
              style={styles.reservationBtn}
              variant="solid"
              _text={{
                color: 'black',
                fontSize: '2xl',
              }}
              onPress={() => navigation.navigate('Profile')}>
              Save change
            </Button>
          </TouchableOpacity>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  update: {
    marginTop: 40,
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
    marginTop: 10,
    backgroundColor: 'wheat',
    marginLeft: 30,
  },
  radio: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gender: {
    marginRight: 10,
  },
  forms: {
    marginVertical: 10,
  },
  reservationBtn: {
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: 'wheat',
  },
});

export default UpdateProfile;
