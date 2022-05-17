import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {NativeBaseProvider, ScrollView, Box} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SearchList from '../components/SearchList';
import Favorites from '../components/Favorite';

const Favorite = () => {
  const navigation = useNavigation();

  const listVehicles = [
    {
      name: 'Vespa Matic',
      location: 'Yogyakarta',
      stock: 14,
      price: 50000,
      image: require('../../images/motorbike.png'),
      rating: 4,
    },
    {
      name: 'Honda',
      location: 'Yogyakarta',
      stock: 14,
      price: 50000,
      image: require('../../images/motorbike.png'),
      rating: 4,
    },
    {
      name: 'Honda',
      location: 'Yogyakarta',
      stock: 2,
      price: 50000,
      image: require('../../images/motorbike.png'),
      rating: 4,
    },
    {
      name: 'KLX',
      location: 'Yogyakarta',
      stock: 1,
      price: 50000,
      image: require('../../images/motorbike.png'),
      rating: 4,
    },
    {
      name: 'Vespa',
      location: 'Yogyakarta',
      stock: 14,
      price: 50000,
      image: require('../../images/motorbike.png'),
      rating: 4,
    },
    {
      name: 'Honda',
      location: 'Yogyakarta',
      stock: 14,
      price: 50000,
      image: require('../../images/motorbike.png'),
      rating: 4,
    },
    {
      name: 'KLX',
      location: 'Yogyakarta',
      stock: 14,
      price: 50000,
      image: require('../../images/motorbike.png'),
      rating: 4,
    },
    {
      name: 'Honda',
      location: 'Yogyakarta',
      stock: 14,
      price: 50000,
      image: require('../../images/motorbike.png'),
      rating: 4,
    },
    {
      name: 'Vespa',
      location: 'Yogyakarta',
      stock: 14,
      price: 50000,
      image: require('../../images/motorbike.png'),
      rating: 4,
    },
  ];
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Box style={styles.main}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <View style={styles.text}>
              <Icon name="chevron-left" size={20} style={styles.icon} />
              <Text style={styles.payment}>Your favourites</Text>
            </View>
          </TouchableOpacity>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={styles.listVehicle}>
            {listVehicles.map((data, index) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Details')}
                key={index}>
                <Favorites
                  image={data.image}
                  name={data.name}
                  stock={data.stock}
                  price={data.price}
                  location={data.location}
                  key={index}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 30,
  },
  icon: {
    fontSize: 18,
  },
  payment: {
    paddingHorizontal: 10,
    fontSize: 24,
  },
  listVehicle: {
    marginTop: 15,
  },
});

export default Favorite;
