import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {login} from './src/image/index';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={login} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>LET’S EXPLORE THE WORLD</Text>
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
  },
});

export default App;
