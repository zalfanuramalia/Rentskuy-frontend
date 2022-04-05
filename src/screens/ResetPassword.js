import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {fp} from '../image/index';
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {resetPass} from '../redux/actions/password';

const ResetPassword = () => {
  const {password} = useSelector(state => state);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [passwords, setPasswords] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'CLEAR_MESSAGE',
    });
  }, [dispatch]);

  const newPasswordHandler = () => {
    dispatch(resetPass(email, code, passwords, confirmPass));
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={fp} resizeMode="cover" style={styles.image}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <View style={styles.back}>
              <Icon name="chevron-left" size={30} color="white" />
              <Text style={styles.textback}>Back</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>THAT’S OKAY, WE GOT YOUR BACK</Text>
        <SafeAreaView style={styles.form}>
          {password.successMsg !== '' && (
            <View style={styles.success}>
              <Text style={styles.textsuccess}>{password.successMsg}</Text>
            </View>
          )}
          <Text style={styles.fp}>
            Enter your email to get reset password code
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Enter your email address"
            placeholderTextColor="grey"
          />
          <TextInput
            style={styles.input}
            onChangeText={setCode}
            value={code}
            placeholder="Enter your code"
            placeholderTextColor="grey"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPasswords}
            value={passwords}
            placeholder="Enter your new password"
            placeholderTextColor="grey"
          />
          <TextInput
            style={styles.input}
            onChangeText={setConfirmPass}
            value={confirmPass}
            placeholder="Enter your confirm new password"
            placeholderTextColor="grey"
          />
        </SafeAreaView>
        <View style={styles.login}>
          <Button
            style={styles.buttons}
            title="Send Code"
            onPress={newPasswordHandler}
          />
        </View>
        {/* <View style={styles.google}>
          <Button
            style={`${styles.buttons} `}
            title="Resend Code"
            onPress={() => Alert.alert('Login Success')}
          />
        </View> */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  back: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 25,
  },
  textback: {
    color: 'white',
    marginLeft: 10,
    fontSize: 18,
  },
  text: {
    color: 'white',
    fontSize: 36,
    fontFamily: 'Roboto',
    lineHeight: 42,
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 100,
    marginHorizontal: 30,
  },
  input: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#DFDEDE',
    opacity: 0.5,
    height: 50,
    marginTop: 20,
  },
  form: {
    marginTop: 100,
  },
  login: {
    marginHorizontal: 8,
    marginTop: 30,
  },
  google: {
    marginHorizontal: 8,
    marginTop: 15,
    justifyContent: 'center',
  },
  buttons: {
    borderRadius: 15,
    padding: 100,
  },
  fp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 50,
    color: 'white',
  },
  success: {
    backgroundColor: 'gray',
    borderWidth: 1,
    borderColor: 'black',
    padding: 15,
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  textsuccess: {
    color: 'white',
  },
});

export default ResetPassword;
