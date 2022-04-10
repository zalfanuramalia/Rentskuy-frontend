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
import {login} from '../image/index';
import Button from '../components/Button';
import IconFA from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import onLogin from '../redux/actions/auth';
import {useNavigation} from '@react-navigation/native';
import allStyles from '../assets/allStyles';
import {Box} from 'native-base';
import ModalPoup from '../components/Modalpoup';

const Login = () => {
  const auth = useSelector(state => state.auth);
  const [visible, setVisible] = React.useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [control, setControl] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    dispatch({
      type: 'CLEAR_ERR',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goLogin = () => {
    dispatch(onLogin(email, password));
    if (!auth.err) {
      setVisible(true);
      setControl(false);
    }
    setControl(true);
  };
  return (
    <View style={styles.container}>
      <Box style={styles.main}>
        <Image
          source={require('../../images/bg-login.png')}
          resizeMode="cover"
        />
        <Box style={styles.forms}>
          <Text style={styles.text}>LET’S EXPLORE THE WORLDS</Text>
          <SafeAreaView style={styles.form}>
            {auth.err && (
              <View style={styles.err}>
                <Text style={styles.texterr}>{auth.errMsg}</Text>
              </View>
            )}
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              placeholder="Email"
              placeholderTextColor="grey"
            />
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="grey"
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('Forgot Password')}>
              <Text style={styles.forgot}>Forgot Password ?</Text>
            </TouchableOpacity>
          </SafeAreaView>
          <View style={styles.login}>
            {!auth.err && (
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

                <Text style={styles.infosuccess}>Login Success!</Text>
              </ModalPoup>
            )}
            <Button style={styles.buttons} title="Login" onPress={goLogin} />
          </View>
          <View style={styles.google}>
            <Button
              style={`${styles.buttons} `}
              title="Login with Google"
              onPress={() => Alert.alert('Login Success')}
            />
          </View>
          <View style={styles.signup}>
            <Text style={styles.textlink}>Dont have account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.link}>Sign up </Text>
            </TouchableOpacity>
            <Text style={styles.textlink}>now</Text>
          </View>
        </Box>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    position: 'relative',
  },
  forms: {
    position: 'absolute',
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
  text: {
    color: 'white',
    fontSize: 36,
    fontFamily: 'Roboto',
    lineHeight: 42,
    fontWeight: '900',
    textAlign: 'justify',
    marginVertical: 10,
    marginHorizontal: 25,
    marginTop: 100,
    marginEnd: 100,
  },
  input: {
    margin: 12,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#DFDEDE',
    opacity: 0.5,
    height: 50,
  },
  form: {
    marginTop: 100,
  },
  forgot: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Roboto',
    lineHeight: 19,
    fontWeight: '400',
    textAlign: 'justify',
    marginVertical: 10,
    marginHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginEnd: 235,
  },
  login: {
    marginHorizontal: 15,
    marginVertical: 15,
  },
  google: {
    marginHorizontal: 15,
    marginTop: 10,
    justifyContent: 'center',
  },
  buttons: {
    borderRadius: 15,
    padding: 100,
  },
  signup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 80,
    marginTop: 15,
    alignItems: 'center',
    color: 'white',
  },
  textlink: {
    color: 'white',
  },
  link: {
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'white',
  },
  err: {
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
  texterr: {
    color: 'white',
  },
});

export default Login;
