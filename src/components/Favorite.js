import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Image, Text} from 'native-base';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const Favorite = ({image, name, price, stock, location}) => {
  return (
    <View style={styles.listVehicles}>
      <View style={styles.left}>
        <Image
          source={image}
          alt={name}
          resizeMode={'cover'}
          width={150}
          height={120}
          borderRadius={30}
          style={styles.image}
        />
      </View>
      <View style={styles.right}>
        <View>
          <Text fontSize={'lg'} bold>
            {name}
          </Text>
          <Text>Jan 18 to 21 2021</Text>
          <Text>Prepayment : {price}</Text>
          <Text>{location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  listVehicles: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 18,
  },
  left: {
    position: 'relative',
    width: '40%',
  },
  image: {},
  rate: {
    flexDirection: 'row',
    width: 65,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
    borderRadius: 20,
    position: 'absolute',
    right: -18,
    top: -10,
  },
  rates: {
    marginLeft: 8,
  },
  right: {
    marginLeft: 35,
    justifyContent: 'space-between',
  },
});

export default Favorite;
