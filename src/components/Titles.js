import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Titles = ({children, child, onPress}) => {
  return (
    <View style={styles.t}>
      <Text style={styles.header}>{children}</Text>
      <TouchableOpacity style={styles.link} onPress={onPress}>
        <Text style={styles.line}>{child}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  t: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  link: {
    marginLeft: 'auto',
  },
  line: {
    textDecorationLine: 'underline',
  },
});

export default Titles;
