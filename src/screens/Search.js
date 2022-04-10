import {View, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import {Text, Input, Box} from 'native-base';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome';
import SearchList from '../components/SearchList';

const Search = ({navigation}) => {
  const listVehicles = [
    {
      name: 'Vespa Matic',
      seat: 2,
      stock: 14,
      price: 50000,
      image: require('../../images/motorbike.png'),
      rating: 4,
    },
    {
      name: 'Honda',
      seat: 2,
      stock: 14,
      price: 50000,
      image: require('../../images/motorbike.png'),
      rating: 4,
    },
    {
      name: 'Honda',
      seat: 2,
      stock: 2,
      price: 50000,
      image: require('../../images/motorbike.png'),
      rating: 4,
    },
    {
      name: 'KLX',
      seat: 2,
      stock: 1,
      price: 50000,
      image: require('../../images/motorbike.png'),
      rating: 4,
    },
    {
      name: 'Vespa',
      seat: 2,
      stock: 14,
      price: 50000,
      image: require('../../images/motorbike.png'),
      rating: 4,
    },
    {
      name: 'Honda',
      seat: 2,
      stock: 14,
      price: 50000,
      image: require('../../images/motorbike.png'),
      rating: 4,
    },
    {
      name: 'KLX',
      seat: 2,
      stock: 14,
      price: 50000,
      image: require('../../images/motorbike.png'),
      rating: 4,
    },
    {
      name: 'Honda',
      seat: 2,
      stock: 14,
      price: 50000,
      image: require('../../images/motorbike.png'),
      rating: 4,
    },
    {
      name: 'Vespa',
      seat: 2,
      stock: 14,
      price: 50000,
      image: require('../../images/motorbike.png'),
      rating: 4,
    },
  ];

  const [search, setSearch] = useState('');

  return (
    <View style={styles.mainWrapper}>
      <Box style={styles.search}>
        <Input
          variant="unstyled"
          fontSize={20}
          placeholder="Search"
          placeholderTextColor="black"
          value={search}
          onChange={setSearch}
          InputLeftElement={
            <Icons name="search" color="black" size={16} style={styles.icon} />
          }
          InputRightElement={
            search !== '' ? (
              <TouchableOpacity onPress={() => setSearch('')}>
                <Icons
                  name="remove"
                  color="black"
                  size={11}
                  style={styles.texticon}
                />
              </TouchableOpacity>
            ) : (
              <></>
            )
          }
        />
      </Box>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.filter}
          onPress={() => navigation.navigate('Filter')}>
          <Icon name="filter" color="black" size={30} />
          <Text>Filter Search</Text>
        </TouchableOpacity>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {listVehicles.map((data, index) => (
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
              <SearchList
                image={data.image}
                name={data.name}
                seat={data.seat}
                stock={data.stock}
                price={data.price}
                key={index}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    marginBottom: 120,
  },
  container: {
    padding: 20,
    marginBottom: 70,
  },
  icon: {
    marginHorizontal: 10,
    fontSize: 20,
  },
  texticon: {
    fontSize: 20,
  },
  search: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 15,
  },
  filter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
});

export default Search;
