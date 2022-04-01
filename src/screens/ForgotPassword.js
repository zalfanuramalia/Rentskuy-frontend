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
import {fp} from '../image/index';
import Button from '../components/Button';

const Signup = () => {
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.container}>
      <ImageBackground source={fp} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>THAT’S OKAY, WE GOT YOUR BACK</Text>
        <SafeAreaView style={styles.form}>
          <Text style={styles.fp}>
            Enter your email to get reset password code
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Enter your email address"
          />
        </SafeAreaView>
        <View style={styles.login}>
          <Button
            style={styles.buttons}
            title="Send Code"
            onPress={() => Alert.alert('Login Success')}
          />
        </View>
        <View style={styles.google}>
          <Button
            style={`${styles.buttons} `}
            title="Resend Code"
            onPress={() => Alert.alert('Login Success')}
          />
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
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#DFDEDE',
    opacity: 0.5,
    height: 50,
    marginTop: 20,
  },
  form: {
    marginTop: 180,
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
    marginTop: 20,
    color: 'white',
  },
});

export default Signup;
