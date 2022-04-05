import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {signup} from '../image/index';
import Button from '../components/Button';
import IconFA from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {userRegister} from '../redux/actions/register';
import {Box} from 'native-base';

const Signup = () => {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {register} = useSelector(state => state);
  const [success, setSuccess] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'CLEAR_ERR',
    });
  }, [dispatch]);

  const goRegister = () => {
    dispatch(userRegister(name, email, password));
    // setSuccess(true);
    // dispatch({
    //   type: 'CLEAR_MESSAGE',
    // });
    // if (register.successMsg) {
    //   navigation.navigate('Login');
    // }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={signup} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>LET’S HAVE SOME RIDE</Text>
        <SafeAreaView style={styles.form}>
          {register.successMsg !== '' && (
            <View style={styles.success}>
              <Text style={styles.textsuccess}>{register.successMsg}</Text>
            </View>
          )}
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
          <Button style={styles.buttons} title="Sign Up" onPress={goRegister} />
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
    marginTop: 150,
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
