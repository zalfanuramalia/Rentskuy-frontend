// import {View, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
// import {Text, Input, Box} from 'native-base';
// import React, {useState} from 'react';
// import Icon from 'react-native-vector-icons/AntDesign';
// import Icons from 'react-native-vector-icons/FontAwesome';
// import SearchList from '../components/SearchList';

// const Search = ({navigation}) => {
//   const listVehicles = [
//     {
//       name: 'Vespa Matic',
//       seat: 2,
//       stock: 14,
//       price: 50000,
//       image: require('../../images/motorbike.png'),
//       rating: 4,
//     },
//     {
//       name: 'Honda',
//       seat: 2,
//       stock: 14,
//       price: 50000,
//       image: require('../../images/motorbike.png'),
//       rating: 4,
//     },
//     {
//       name: 'Honda',
//       seat: 2,
//       stock: 2,
//       price: 50000,
//       image: require('../../images/motorbike.png'),
//       rating: 4,
//     },
//     {
//       name: 'KLX',
//       seat: 2,
//       stock: 1,
//       price: 50000,
//       image: require('../../images/motorbike.png'),
//       rating: 4,
//     },
//     {
//       name: 'Vespa',
//       seat: 2,
//       stock: 14,
//       price: 50000,
//       image: require('../../images/motorbike.png'),
//       rating: 4,
//     },
//     {
//       name: 'Honda',
//       seat: 2,
//       stock: 14,
//       price: 50000,
//       image: require('../../images/motorbike.png'),
//       rating: 4,
//     },
//     {
//       name: 'KLX',
//       seat: 2,
//       stock: 14,
//       price: 50000,
//       image: require('../../images/motorbike.png'),
//       rating: 4,
//     },
//     {
//       name: 'Honda',
//       seat: 2,
//       stock: 14,
//       price: 50000,
//       image: require('../../images/motorbike.png'),
//       rating: 4,
//     },
//     {
//       name: 'Vespa',
//       seat: 2,
//       stock: 14,
//       price: 50000,
//       image: require('../../images/motorbike.png'),
//       rating: 4,
//     },
//   ];

//   const [search, setSearch] = useState('');

//   return (
//     <View style={styles.mainWrapper}>
//       <Box style={styles.search}>
//         <Input
//           variant="unstyled"
//           fontSize={20}
//           placeholder="Search"
//           placeholderTextColor="black"
//           value={search}
//           onChange={setSearch}
//           InputLeftElement={
//             <Icons name="search" color="black" size={16} style={styles.icon} />
//           }
//           InputRightElement={
//             search !== '' ? (
//               <TouchableOpacity onPress={() => setSearch('')}>
//                 <Icons
//                   name="remove"
//                   color="black"
//                   size={11}
//                   style={styles.texticon}
//                 />
//               </TouchableOpacity>
//             ) : (
//               <></>
//             )
//           }
//         />
//       </Box>
//       <View style={styles.container}>
//         <TouchableOpacity
//           style={styles.filter}
//           onPress={() => navigation.navigate('Filter')}>
//           <Icon name="filter" color="black" size={30} />
//           <Text>Filter Search</Text>
//         </TouchableOpacity>
//         <ScrollView
//           showsVerticalScrollIndicator={false}
//           showsHorizontalScrollIndicator={false}>
//           {listVehicles.map((data, index) => (
//             <TouchableOpacity
//               onPress={() => navigation.navigate('Details')}
//               key={index}>
//               <SearchList
//                 image={data.image}
//                 name={data.name}
//                 seat={data.seat}
//                 stock={data.stock}
//                 price={data.price}
//                 key={index}
//               />
//             </TouchableOpacity>
//           ))}
//         </ScrollView>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   mainWrapper: {
//     marginBottom: 120,
//   },
//   container: {
//     padding: 20,
//     marginBottom: 70,
//   },
//   icon: {
//     marginHorizontal: 10,
//     fontSize: 20,
//   },
//   texticon: {
//     fontSize: 20,
//   },
//   search: {
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: '#fff',
//     paddingHorizontal: 10,
//     paddingTop: 10,
//     paddingBottom: 10,
//     borderRadius: 10,
//     marginHorizontal: 15,
//     marginVertical: 15,
//   },
//   filter: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingBottom: 10,
//   },
// });

// export default Search;

import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {Text, Input, Box, Image} from 'native-base';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome';
import SearchList from '../components/SearchList';
import {useDispatch, useSelector} from 'react-redux';
import {getAllVehicles} from '../redux/actions/vehicle';
import LinearGradient from 'react-native-linear-gradient';
import FaIcon from 'react-native-vector-icons/FontAwesome';

const Search = ({navigation}) => {
  const vehicle = useSelector(state => state.vehicle);
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllVehicles());
  }, [dispatch]);

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
          {/* {vehicle.allVehicles.map((datas, index) => {
            return (
              <TouchableOpacity
                style={styles.listVehicles}
                key={datas.id}
                onPress={() => navigation.navigate('Details')}>
                <View style={styles.left}>
                  <Image
                    source={{uri: `${datas.image}`}}
                    resizeMode="contain"
                    borderRadius={30}
                    style={styles.image}
                  />
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#FFEDC1', '#E6CFA5', '#D7C197']}
                    style={styles.rate}>
                    <Text bold color="white" fontSize={'md'}>
                      4.5
                    </Text>
                    <FaIcon
                      name="star"
                      color="white"
                      size={20}
                      style={styles.rates}
                    />
                  </LinearGradient>
                </View>
                <View style={styles.right}>
                  <View>
                    <Text fontSize={'lg'} bold>
                      {datas.brand}
                    </Text>
                    <Text>Max for {datas.qty} person</Text>
                    <Text>2.1 km from your location</Text>
                  </View>
                  <Text fontSize={'lg'} bold style={styles.price}>
                    Rp.{datas.price}/day
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })} */}
          <SafeAreaView>
            <ScrollView>
              {vehicle.allVehicle.map((datas, idx) => {
                return (
                  <TouchableOpacity
                    key={datas.id}
                    style={styles.listVehicles}
                    onPress={() =>
                      navigation.navigate('Details', {id: datas.id})
                    }>
                    <View style={styles.left}>
                      <Image
                        source={{uri: `${datas.image}`}}
                        resizeMode="contain"
                        borderRadius={30}
                        style={styles.image}
                      />
                      <LinearGradient
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        colors={['#FFEDC1', '#E6CFA5', '#D7C197']}
                        style={styles.rate}>
                        <Text bold color="white" fontSize={'md'}>
                          4.5
                        </Text>
                        <FaIcon
                          name="star"
                          color="white"
                          size={20}
                          style={styles.rates}
                        />
                      </LinearGradient>
                    </View>
                    <View style={styles.right}>
                      <View>
                        <Text fontSize={'lg'} bold>
                          {datas.brand}
                        </Text>
                        <Text>Max for {datas.qty} person</Text>
                        <Text>2.1 km from your location</Text>
                      </View>
                      <Text fontSize={'lg'} bold style={styles.price}>
                        Rp.{datas.price}/day
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </SafeAreaView>
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
  listVehicles: {
    flexDirection: 'row',
    marginVertical: 18,
  },
  left: {
    position: 'relative',
    width: '40%',
  },
  image: {
    width: 150,
    height: 120,
  },
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

export default Search;
