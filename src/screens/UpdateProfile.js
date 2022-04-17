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
  Spinner,
} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {getProfile, updateProfile} from '../redux/actions/auth';
import RNFetchBlob from 'rn-fetch-blob';
import {launchImageLibrary} from 'react-native-image-picker';
import ModalPoup from '../components/Modalpoup';
import moment from 'moment';
import uploads from '../../images/upload.png';

const UpdateProfile = ({route}) => {
  const navigation = useNavigation();
  const [value, setValue] = React.useState('one');
  const {auth} = useSelector(state => state);
  const [name, setName] = useState('');
  const [gender, setGender] = useState(`${auth.userData.gender}`);
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState('');
  const [control, setControl] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState('');
  const [upload, setUpload] = useState(false);
  const [picture, setPicture] = useState(require('../../images/people-1.png'));
  const [visible, setVisible] = React.useState(false);

  const dispatch = useDispatch();
  const {id: idProfile} = route.params;

  useEffect(() => {
    dispatch(getProfile(auth.token));
    console.log(image);
    // dispatch({
    //   type: 'CLEAR_UPDATE_MESSAGE',
    // });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const addImage = async () => {
    const photo = await launchImageLibrary({});
    setImage(photo.assets[0]);
  };

  const updateProfileHandler = async () => {
    // console.log(image);
    await dispatch(
      updateProfile(
        auth.userData.id,
        auth.token,
        name,
        gender,
        email,
        address,
        number,
        birthdate,
        image,
      ),
    );
    if (!auth.err) {
      setVisible(true);
      setControl(false);
    }
    setControl(true);
  };
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
          {image ? (
            <Image
              source={{uri: image.uri}}
              style={styles.profileImg}
              width={100}
              height={100}
            />
          ) : (
            <Image
              source={{uri: auth.userData.image}}
              style={styles.profileImg}
            />
          )}
          <View>
            <Button
              onPress={() => navigation.navigate('Profile')}
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
              onPress={addImage}
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
            <Text style={styles.label}>Name :</Text>
            <Input
              variant="underlined"
              placeholder="Your Name"
              // defaultValue={auth.userData.name}
              value={name ? name : auth.userData?.name}
              onChangeText={setName}
            />
          </Stack>
          <View style={styles.radio}>
            <Box>
              <Radio.Group
                name="myRadioGroup"
                value={gender}
                style={styles.gender}
                onChange={nextValue => {
                  setGender(nextValue);
                }}>
                <Radio value="Women" my="1">
                  Women
                </Radio>
              </Radio.Group>
            </Box>
            <Box>
              <Radio.Group
                name="myRadioGroup"
                value={gender}
                onChange={nextValue => {
                  setGender(nextValue);
                }}>
                <Radio value="Men" my="1">
                  Men
                </Radio>
              </Radio.Group>
            </Box>
          </View>
          <Stack style={styles.forms}>
            <Text style={styles.label}>Email Address :</Text>
            <Input
              variant="underlined"
              placeholder="Your Email Address"
              // defaultValue={auth.userData.email}
              value={email ? email : auth.userData.email}
              onChangeText={setEmail}
            />
          </Stack>
          <Stack style={styles.forms}>
            <Text style={styles.label}>Phone Number :</Text>
            <Input
              variant="underlined"
              placeholder="Your Phone Number"
              // defaultValue={auth.userData.number}
              value={number ? number : auth.userData.number}
              onChangeText={setNumber}
            />
          </Stack>
          <Stack style={styles.forms}>
            <Text style={styles.label}>Date of Birth :</Text>
            <Input
              variant="underlined"
              placeholder="Your Date of Birth"
              // defaultValue={auth.userData.birthdate}
              value={
                birthdate
                  ? moment(birthdate.toLocaleString()).format('YYYY-MM-DD')
                  : moment(auth.userData.birthdate.toLocaleString()).format(
                      'YYYY-MM-DD',
                    )
              }
              onChangeText={setBirthdate}
            />
          </Stack>
          <Stack style={styles.forms}>
            <Text style={styles.label}>Delivery Address :</Text>
            <Input
              variant="underlined"
              placeholder="Your Delivery Address"
              // defaultValue={auth.userData.address}
              value={address ? address : auth.userData.address}
              onChangeText={setAddress}
            />
          </Stack>
          <TouchableOpacity style={styles.textinput}>
            {auth.successMsg !== null && (
              <ModalPoup visible={visible}>
                <View alignItems="center">
                  <View style={styles.header}>
                    <TouchableOpacity onPress={() => setVisible(false)}>
                      <Image
                        source={require('../../images/x.png')}
                        style={styles.false}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View alignItems="center">
                  <Image
                    source={require('../../images/success.png')}
                    style={styles.success}
                  />
                </View>

                <Text style={styles.infosuccess}>
                  Your Profile Has Been Updated!
                </Text>
              </ModalPoup>
            )}
            <Button
              style={styles.reservationBtn}
              variant="solid"
              _text={{
                color: 'black',
                fontSize: '2xl',
              }}
              onPress={updateProfileHandler}>
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
  label: {
    marginHorizontal: 8,
    fontSize: 18,
    fontWeight: '700',
  },
  false: {
    width: 30,
    height: 30,
  },
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  success: {
    height: 150,
    width: 150,
    marginVertical: 10,
  },
  infosuccess: {
    marginVertical: 30,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default UpdateProfile;
