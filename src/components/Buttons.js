import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Buttons = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  // ...
  appButtonContainer: {
    elevation: 8,
    backgroundColor: 'wheat',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 105,
  },
  appButtonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default Buttons;
