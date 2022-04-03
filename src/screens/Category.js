import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const Category = () => {
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <View flexDirection="row">
            <Icon name="chevron-left" size={20} />
            <Text style={styles.text}>Hot Deals</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={require('../../images/detail-1.png')}
          style={styles.profileImg}
        />
        <Box>
          <Text>Kintamani, 1.3 miles from your location</Text>
          <View flexDirection="row">
            <View>
              <Text>Vespa Matic </Text>
              <Text>Available</Text>
            </View>
            <View>
              <Text>Rp. 120.000/day </Text>
              <Text>Rp. 80.000/day</Text>
            </View>
          </View>
        </Box>
      </View>
      <View>
        <Image
          source={require('../../images/detail-2.png')}
          style={styles.profileImg}
        />
        <Box>
          <Text>Kuta, 0.5 miles from your location</Text>
          <View flexDirection="row">
            <View>
              <Text>KLX Bike</Text>
              <Text>Available</Text>
            </View>
            <View>
              <Text>Rp. 320.000/day </Text>
              <Text>Rp. 200.000/day</Text>
            </View>
          </View>
        </Box>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 10,
    fontSize: 20,
  },
  profileImg: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Category;
