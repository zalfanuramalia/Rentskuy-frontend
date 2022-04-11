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
import {signup} from '../image/index';
import Button from '../components/Button';
import IconFA from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {userRegister} from '../redux/actions/register';
import {Box} from 'native-base';
import ModalPoup from '../components/Modalpoup';

const Signup = () => {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const {register} = useSelector(state => state);
  const [success, setSuccess] = useState(false);
  const [control, setControl] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'CLEAR_MESSAGE',
    });
  }, [dispatch]);

  const goRegister = () => {
    dispatch(userRegister(name, email, password));
    if (!register.err) {
      setVisible(true);
      setControl(false);
    }
    setControl(true);
  };

  const closeHandler = () => {
    setVisible(false);
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Box style={styles.main}>
        <Image source={signup} resizeMode="cover" style={styles.bg} />
        <Box style={styles.forms}>
          <Text style={styles.text}>LET’S HAVE SOME RIDE</Text>
          <SafeAreaView style={styles.form}>
            <TextInput
              style={styles.input}
              onChangeText={setName}
              value={name}
              placeholder="Name"
              placeholderTextColor="grey"
            />
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              placeholder="Email"
              keyboardType="email-address"
              placeholderTextColor="grey"
            />
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              secureTextEntry={true}
              value={password}
              placeholder="Password"
              placeholderTextColor="grey"
            />
          </SafeAreaView>

          <View style={styles.login}>
            {register.successMsg !== '' && (
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
                    style={styles.success}
                  />
                </View>

                <Text style={styles.infosuccess}>Register Success!</Text>
              </ModalPoup>
            )}
            <Button
              style={styles.buttons}
              title="Sign Up"
              onPress={goRegister}
            />
          </View>
          <View style={styles.google}>
            <Button
              style={`${styles.buttons} `}
              title="Sign up with Google"
              onPress={() => Alert.alert('Login Success')}
            />
          </View>
          <View style={styles.signup}>
            <Text style={styles.textlink}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.link}>Login </Text>
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
  image: {
    flex: 1,
  },
  textsuccess: {
    color: 'white',
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
    margin: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#DFDEDE',
    opacity: 0.5,
    height: 50,
  },
  form: {
    marginTop: 80,
    marginHorizontal: 10,
  },
  login: {
    marginHorizontal: 15,
    marginTop: 30,
  },
  google: {
    marginHorizontal: 15,
    marginTop: 15,
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
});

export default Signup;
