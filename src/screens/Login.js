import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Alert,
} from 'react-native';
import React from 'react';
import {login} from '../image/index';
import Button from '../components/Button';
import IconFA from 'react-native-vector-icons/FontAwesome';

const Login = () => {
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.container}>
      <ImageBackground source={login} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>LET’S EXPLORE THE WORLDS</Text>
        <SafeAreaView style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Username"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Password"
            keyboardType="numeric"
          />
          <Text style={styles.forgot}>Forgot Password ?</Text>
        </SafeAreaView>
        <View style={styles.login}>
          <Button
            style={styles.buttons}
            title="Login"
            onPress={() => Alert.alert('Login Success')}
          />
        </View>
        <View style={styles.google}>
          <Button
            style={`${styles.buttons} `}
            title="Login with Google"
            onPress={() => Alert.alert('Login Success')}
          />
        </View>
        <Text style={styles.signup}>Dont have account? Sign up now</Text>
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
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#DFDEDE',
    opacity: 0.5,
    height: 50,
  },
  form: {
    marginTop: 200,
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
    justifyContent: 'space-between',
    marginHorizontal: 80,
    marginTop: 20,
  },
});

export default Login;
