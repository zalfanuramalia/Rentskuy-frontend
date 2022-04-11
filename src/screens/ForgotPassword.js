import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {fp} from '../image/index';
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {forgotpass} from '../redux/actions/password';
import {Box} from 'native-base';
import ModalPoup from '../components/Modalpoup';
import PushNotification from 'react-native-push-notification';

const ForgotPassword = () => {
  const {password} = useSelector(state => state);
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [visible, setVisible] = React.useState(false);
  const [control, setControl] = useState(false);

  useEffect(() => {
    dispatch({
      type: 'CLEAR_MESSAGE',
    });
  }, [dispatch]);

  const localNotif = () => {
    PushNotification.localNotification({
      channelId: 'rent-skuy',
      message:
        "Your OTP has been sent. Please check your email! Don't give your OTP to anyone",
      title: 'Order Information',
    });
  };

  const sendCode = () => {
    setVisible(true);
    dispatch(forgotpass(email));
  };

  const closeHandler = () => {
    setVisible(false);
    navigation.navigate('Reset Password');
    localNotif();
  };
  return (
    <View style={styles.container}>
      <Box style={styles.main}>
        <Image source={fp} resizeMode="cover" style={styles.bg} />
        <Box style={styles.forms}>
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
            {password.err && (
              <View style={styles.success}>
                <Text style={styles.textsuccess}>{password.errMsg}</Text>
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
            <View style={styles.login}>
              <Button
                style={styles.buttons}
                title="Send Code"
                onPress={sendCode}
              />
            </View>
            {password.successMsg !== '' && (
              <ModalPoup visible={visible}>
                <View alignItems="center">
                  <View style={styles.header}>
                    <TouchableOpacity onPress={closeHandler}>
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
                    style={styles.successes}
                  />
                </View>

                <Text style={styles.infosuccess}>{password.successMsg}</Text>
              </ModalPoup>
            )}
          </SafeAreaView>
        </Box>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    width: 502,
    height: 881,
  },
  main: {
    position: 'relative',
  },
  forms: {
    position: 'absolute',
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
  back: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
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
    marginLeft: 5,
  },
  login: {
    marginHorizontal: 5,
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
    marginTop: 20,
    color: 'white',
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
  successes: {
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

export default ForgotPassword;
