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
import {useDispatch, useSelector} from 'react-redux';
import {getAllVehicles, getSearch} from '../redux/actions/vehicle';
import LinearGradient from 'react-native-linear-gradient';
import FaIcon from 'react-native-vector-icons/FontAwesome';

const Search = ({navigation}) => {
  const vehicle = useSelector(state => state.vehicle);
  const [key, setKey] = useState();

  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllVehicles());
  }, [dispatch]);

  const handleSearch = () => {
    const dataFilter = {search: key};
    dispatch(getSearch(dataFilter));
  };

  return (
    <View style={styles.mainWrapper}>
      <Box style={styles.search}>
        <Input
          variant="unstyled"
          fontSize={20}
          placeholder="Search"
          placeholderTextColor="black"
          value={key}
          onChangeText={setKey}
          InputLeftElement={
            <TouchableOpacity
              style={styles.iconSearchWrap}
              onPress={handleSearch}>
              <Icons
                name="search"
                color="black"
                size={16}
                style={styles.icon}
              />
            </TouchableOpacity>
          }
          InputRightElement={
            key !== '' ? (
              <TouchableOpacity onPress={() => setKey('')}>
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
          style={styles.dataVehicles}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <SafeAreaView>
            {!key ? (
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
            ) : (
              <ScrollView>
                {vehicle.search.map((datas, idx) => {
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
            )}
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
  dataVehicles: {
    marginBottom: 50,
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
