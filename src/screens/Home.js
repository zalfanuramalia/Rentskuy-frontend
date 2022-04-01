import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Button from '../components/Button';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Box,
  NativeBaseProvider,
  HStack,
  VStack,
  FlatList,
  Divider,
  ScrollView,
  Select,
} from 'native-base';
import allStyles from '../assets/allStyles';
import Titles from '../components/Titles';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = () => {
  const [date, setDate] = useState(new Date());
  let [service, setService] = React.useState('');

  const [dateChanged, setDateChanged] = useState(false);
  const onChange = (e, selectedDate) => {
    setDate(selectedDate);
    setDateChanged(true);
  };
  const handleShowDatePicker = e => {
    e.preventDefault();
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: 'date',
    });
  };

  const data = [
    {id: 1, image: require('../../images/vehicles.png')},
    {id: 2, image: require('../../images/vehicles.png')},
    {id: 3, image: require('../../images/vehicles.png')},
    {id: 4, image: require('../../images/vehicles.png')},
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.coverImg}>
        <Image source={item.image} style={styles.listImg} />
      </TouchableOpacity>
    );
  };
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <View style={styles.main}>
        <Image
          source={require('../../images/bg-home.png')}
          resizeMode="cover"
        />
        <View style={styles.search}>
          <Box shadow="1" borderTopRadius={20} style={styles.box}>
            <VStack>
              <View>
                <Box
                  border="1"
                  shadow="1"
                  borderRadius="10"
                  style={styles.textinput}>
                  <TextInput
                    name="location"
                    placeholder="Search Location"
                    style={styles.input}
                  />
                </Box>
                <Box>
                  {/* <Select
                    selectedValue={service}
                    minWidth="200"
                    accessibilityLabel="Choose Service"
                    placeholder="Choose Service"
                    _selectedItem={{
                      bg: 'teal.600',
                      endIcon: <Octicons name="triangle-down" size="5" />,
                    }}
                    mt={1}
                    onValueChange={itemValue => setService(itemValue)}>
                    <Select.Item
                      label="UX Research"
                      value="ux"
                      backgroundColor="black"
                    />
                    <Select.Item label="Web Development" value="web" />
                    <Select.Item
                      label="Cross Platform Development"
                      value="cross"
                    />
                    <Select.Item label="UI Designing" value="ui" />
                    <Select.Item label="Backend Development" value="backend" />
                  </Select> */}
                </Box>
              </View>
              <Box
                border="1"
                shadow="1"
                borderRadius="10"
                style={styles.textinput}>
                <TextInput
                  name="date"
                  placeholder="Search Date"
                  style={styles.input}
                />
              </Box>
              <TouchableOpacity style={styles.textinput}>
                <Button
                  style={styles.buttons}
                  title="Search Vehicle"
                  onPress={() => navigation.navigate('Category')}
                />
              </TouchableOpacity>
            </VStack>
            <View />
          </Box>
          <SafeAreaView>
            <ScrollView>
              <View style={styles.nav}>
                <Text style={styles.recommend}>Recommended</Text>
                <View style={styles.viewmore}>
                  <Text style={styles.text}>View more</Text>
                  <Icon name="chevron-right" size={20} />
                </View>
              </View>
              <FlatList
                data={data}
                renderItem={renderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.img}
              />
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  main: {
    position: 'relative',
  },
  search: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    marginTop: 220,
    background: 'transparent',
  },
  box: {
    backgroundColor: '#393939',
  },
  input: {
    color: 'white',
    paddingHorizontal: 15,
  },
  textinput: {
    marginHorizontal: 15,
    marginVertical: 15,
  },
  nav: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 15,
  },
  location: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewmore: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    paddingHorizontal: 10,
    fontSize: 20,
  },
  recommend: {
    fontSize: 20,
    fontWeight: '600',
  },
  coverImg: {
    width: 300,
    marginRight: 20,
  },
  listImg: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
    margin: 20,
  },
  google: {
    marginHorizontal: 15,
    marginTop: 10,
    justifyContent: 'center',
  },
  buttons: {
    borderRadius: 5,
    padding: 100,
  },
  home: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default Home;

// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   SafeAreaView,
//   ScrollView,
//   FlatList,
//   TouchableOpacity,
// } from 'react-native';

// const Home = ({navigation}) => {
//   const data = [
//     {id: 1, image: require('../assets/1.png')},
//     {id: 2, image: require('../assets/2.png')},
//     {id: 3, image: require('../assets/3.png')},
//     {id: 4, image: require('../assets/4.png')},
//   ];
//   const renderItem = ({item}) => {
//     //the app will represent each list item via a Text component
//     return (
//       <TouchableOpacity style={styles.coverImg}>
//         <Image source={item.image} style={styles.listImg} />
//       </TouchableOpacity>
//     );
//   };
//   return (
//     <SafeAreaView style={styles.screen}>
//       <ScrollView>
//         <Image
//           source={require('../assets/header.png')}
//           style={styles.headerImg}
//         />
//         <View style={styles.content}>
//           <FlatList
//             data={data} //pass in our data array
//             renderItem={renderItem}
//             horizontal={true}
//             showsHorizontalScrollIndicator={false}
//           />
//           <Title child={'Hot Deals'} resChild={'View more'} />
//           <FlatList
//             data={data} //pass in our data array
//             renderItem={renderItem}
//             horizontal={true}
//             showsHorizontalScrollIndicator={false}
//           />
//           <Title child={'Cars'} resChild={'View more'} />
//           <FlatList
//             data={data} //pass in our data array
//             renderItem={renderItem}
//             horizontal={true}
//             showsHorizontalScrollIndicator={false}
//           />
//           <Title child={'Bike'} resChild={'View more'} />
//           <FlatList
//             data={data} //pass in our data array
//             renderItem={renderItem}
//             horizontal={true}
//             showsHorizontalScrollIndicator={false}
//           />
//           <Title child={'Motorbike'} resChild={'View more'} />
//           <FlatList
//             data={data} //pass in our data array
//             renderItem={renderItem}
//             horizontal={true}
//             showsHorizontalScrollIndicator={false}
//           />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   screen: {
//     position: 'relative',
//     height: '100%',
//     backgroundColor: 'rgba(154, 208, 236, 0.1)',
//   },
//   headerImg: {
//     width: '100%',
//   },
//   coverImg: {
//     width: 300,
//     marginRight: 20,
//   },
//   listImg: {
//     flex: 1,
//     width: '100%',
//     resizeMode: 'cover',
//     borderRadius: 10,
//     margin: 20,
//   },
// });

// export default Home;
