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
import {signup} from '../image/index';
import Button from '../components/Button';
import IconFA from 'react-native-vector-icons/FontAwesome';

const Signup = () => {
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.container}>
      <ImageBackground source={signup} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>LET’S HAVE SOME RIDE</Text>
        <SafeAreaView style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Mobile Phone"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Password"
            keyboardType="numeric"
          />
        </SafeAreaView>
        <View style={styles.login}>
          <Button
            style={styles.buttons}
            title="Sign Up"
            onPress={() => Alert.alert('Login Success')}
          />
        </View>
        <View style={styles.google}>
          <Button
            style={`${styles.buttons} `}
            title="Sign up with Google"
            onPress={() => Alert.alert('Login Success')}
          />
        </View>
        <Text style={styles.signup}>Already have an account? Login now</Text>
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
    margin: 5,
    borderWidth: 1,
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
    justifyContent: 'space-between',
    marginHorizontal: 70,
    marginTop: 20,
    color: 'white',
  },
});

export default Signup;
