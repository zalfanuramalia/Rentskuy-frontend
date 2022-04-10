import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Buttons from '../components/Buttons';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Box,
  NativeBaseProvider,
  HStack,
  VStack,
  FlatList,
  Divider,
  Select,
  Input,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import Icons from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import getPopular from '../redux/actions/popular';
import {getCar, getMotorbike, getBike} from '../redux/actions/category';

const Home = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  let [service, setService] = React.useState('');
  const dispatch = useDispatch();

  const {category, popular, auth} = useSelector(state => state);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(getPopular());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCar());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getMotorbike());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getBike());
  }, [dispatch]);

  // const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      {auth.userData?.role === 'Admin' ? (
        <ScrollView>
          <Box style={styles.main}>
            <Image
              source={require('../../images/bg-home.png')}
              resizeMode="cover"
              style={styles.bg}
            />
            <Box style={styles.search}>
              <Input
                variant="unstyled"
                fontSize={20}
                placeholder="Search vehicle"
                placeholderTextColor="white"
                value={search}
                onChange={setSearch}
                InputLeftElement={
                  <Icons
                    name="search"
                    color="white"
                    size={16}
                    style={styles.icon}
                  />
                }
                InputRightElement={
                  search !== '' ? (
                    <TouchableOpacity onPress={() => setSearch('')}>
                      <Icons
                        name="remove"
                        color="white"
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
            <Box style={styles.btn}>
              <Buttons
                style={`${styles.buttons} `}
                title="Add new item"
                onPress={() => navigation.navigate('Add New Item')}
              />
            </Box>
          </Box>
          <Box>
            <Box style={styles.nav}>
              <Text style={styles.recommend}>Recommended</Text>
              <TouchableOpacity
                style={styles.viewmore}
                onPress={() => navigation.navigate('Search')}>
                <Text style={styles.text}>View more</Text>
                <Icon name="chevron-right" size={20} />
              </TouchableOpacity>
            </Box>
            <SafeAreaView>
              <ScrollView horizontal={true} style={styles.coverImg}>
                {popular.popular.map(items => {
                  return (
                    <TouchableOpacity
                      key={items.id}
                      style={styles.scroll}
                      onPress={() =>
                        navigation.navigate('Details', {id: items.id})
                      }>
                      <Box style={styles.listImg}>
                        <Image
                          source={{uri: `${items.image}`}}
                          style={styles.img}
                          resizeMode="contain"
                        />
                      </Box>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </SafeAreaView>
          </Box>
          <Box>
            <Box style={styles.nav}>
              <Text style={styles.recommend}>Cars</Text>
              <TouchableOpacity
                style={styles.viewmore}
                onPress={() => navigation.navigate('Search')}>
                <Text style={styles.text}>View more</Text>
                <Icon name="chevron-right" size={20} />
              </TouchableOpacity>
            </Box>
            <SafeAreaView>
              <ScrollView horizontal={true} style={styles.coverImg}>
                {category.car.map(items => {
                  return (
                    <TouchableOpacity
                      key={items.id}
                      style={styles.scroll}
                      onPress={() =>
                        navigation.navigate('Details', {id: items.id})
                      }>
                      <Box style={styles.listImg}>
                        <Image
                          source={{uri: `${items.image}`}}
                          style={styles.img}
                          resizeMode="contain"
                        />
                      </Box>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </SafeAreaView>
          </Box>
          <Box>
            <Box style={styles.nav}>
              <Text style={styles.recommend}>Motorcycles</Text>
              <TouchableOpacity
                style={styles.viewmore}
                onPress={() => navigation.navigate('Search')}>
                <Text style={styles.text}>View more</Text>
                <Icon name="chevron-right" size={20} />
              </TouchableOpacity>
            </Box>
            <SafeAreaView>
              <ScrollView horizontal={true} style={styles.coverImg}>
                {category.motorbike.map(items => {
                  return (
                    <TouchableOpacity
                      key={items.id}
                      style={styles.scroll}
                      onPress={() =>
                        navigation.navigate('Details', {id: items.id})
                      }>
                      <Box style={styles.listImg}>
                        <Image
                          source={{uri: `${items.image}`}}
                          style={styles.img}
                          resizeMode="contain"
                        />
                      </Box>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </SafeAreaView>
          </Box>
          <Box>
            <Box style={styles.nav}>
              <Text style={styles.recommend}>Bikes</Text>
              <TouchableOpacity
                style={styles.viewmore}
                onPress={() => navigation.navigate('Search')}>
                <Text style={styles.text}>View more</Text>
                <Icon name="chevron-right" size={20} />
              </TouchableOpacity>
            </Box>
            <SafeAreaView>
              <ScrollView horizontal={true} style={styles.coverImg}>
                {category.bike.map(items => {
                  return (
                    <TouchableOpacity
                      key={items.id}
                      style={styles.scroll}
                      onPress={() =>
                        navigation.navigate('Details', {id: items.id})
                      }>
                      <Box style={styles.listImg}>
                        <Image
                          source={{uri: `${items.image}`}}
                          style={styles.img}
                          resizeMode="contain"
                        />
                      </Box>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </SafeAreaView>
          </Box>
        </ScrollView>
      ) : (
        <ScrollView horizontal={false}>
          <Box style={styles.main}>
            <Image
              source={require('../../images/bg-home.png')}
              resizeMode="cover"
            />
            <Box style={styles.search}>
              <Input
                variant="unstyled"
                fontSize={20}
                placeholder="Search vehicle"
                placeholderTextColor="white"
                value={search}
                onChange={setSearch}
                InputLeftElement={
                  <Icons
                    name="search"
                    color="white"
                    size={16}
                    style={styles.icon}
                  />
                }
                InputRightElement={
                  search !== '' ? (
                    <TouchableOpacity onPress={() => setSearch('')}>
                      <Icons
                        name="remove"
                        color="white"
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
          </Box>
          <Box>
            <Box style={styles.nav}>
              <Text style={styles.recommend}>Recommended</Text>
              <TouchableOpacity
                style={styles.viewmore}
                onPress={() => navigation.navigate('Search')}>
                <Text style={styles.text}>View more</Text>
                <Icon name="chevron-right" size={20} />
              </TouchableOpacity>
            </Box>
            <SafeAreaView>
              <ScrollView horizontal={true} style={styles.coverImg}>
                {popular.popular.map(items => {
                  return (
                    <TouchableOpacity
                      key={items.id}
                      style={styles.scroll}
                      onPress={() =>
                        navigation.navigate('Details', {id: items.id})
                      }>
                      <Box style={styles.listImg}>
                        <Image
                          source={{uri: `${items.image}`}}
                          style={styles.img}
                          resizeMode="contain"
                        />
                      </Box>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </SafeAreaView>
          </Box>
          <Box>
            <Box style={styles.nav}>
              <Text style={styles.recommend}>Cars</Text>
              <TouchableOpacity
                style={styles.viewmore}
                onPress={() => navigation.navigate('Search')}>
                <Text style={styles.text}>View more</Text>
                <Icon name="chevron-right" size={20} />
              </TouchableOpacity>
            </Box>
            <SafeAreaView>
              <ScrollView horizontal={true} style={styles.coverImg}>
                {category.car.map(items => {
                  return (
                    <TouchableOpacity
                      key={items.id}
                      style={styles.scroll}
                      onPress={() =>
                        navigation.navigate('Details', {id: items.id})
                      }>
                      <Box style={styles.listImg}>
                        <Image
                          source={{uri: `${items.image}`}}
                          style={styles.img}
                          resizeMode="contain"
                        />
                      </Box>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </SafeAreaView>
          </Box>
          <Box>
            <Box style={styles.nav}>
              <Text style={styles.recommend}>Motorcycles</Text>
              <TouchableOpacity
                style={styles.viewmore}
                onPress={() => navigation.navigate('Search')}>
                <Text style={styles.text}>View more</Text>
                <Icon name="chevron-right" size={20} />
              </TouchableOpacity>
            </Box>
            <SafeAreaView>
              <ScrollView horizontal={true} style={styles.coverImg}>
                {category.motorbike.map(items => {
                  return (
                    <TouchableOpacity
                      key={items.id}
                      style={styles.scroll}
                      onPress={() =>
                        navigation.navigate('Details', {id: items.id})
                      }>
                      <Box style={styles.listImg}>
                        <Image
                          source={{uri: `${items.image}`}}
                          style={styles.img}
                          resizeMode="contain"
                        />
                      </Box>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </SafeAreaView>
          </Box>
          <Box>
            <Box style={styles.nav}>
              <Text style={styles.recommend}>Bikes</Text>
              <TouchableOpacity
                style={styles.viewmore}
                onPress={() => navigation.navigate('Search')}>
                <Text style={styles.text}>View more</Text>
                <Icon name="chevron-right" size={20} />
              </TouchableOpacity>
            </Box>
            <SafeAreaView>
              <ScrollView horizontal={true} style={styles.coverImg}>
                {category.bike.map(items => {
                  return (
                    <TouchableOpacity
                      key={items.id}
                      style={styles.scroll}
                      onPress={() =>
                        navigation.navigate('Details', {id: items.id})
                      }>
                      <Box style={styles.listImg}>
                        <Image
                          source={{uri: `${items.image}`}}
                          style={styles.img}
                          resizeMode="contain"
                        />
                      </Box>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </SafeAreaView>
          </Box>
        </ScrollView>
      )}
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  main: {
    position: 'relative',
  },
  scroll: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    borderRadius: 15,
  },
  btn: {
    marginHorizontal: 10,
    marginTop: 130,
    position: 'absolute',
    width: '90%',
    alignItems: 'center',
    marginLeft: 15,
  },
  search: {
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: '#393939',
    opacity: 0.5,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 15,
    marginHorizontal: 15,
    marginVertical: 15,
    marginTop: 50,
    color: 'white',
    width: '90%',
  },
  box: {
    backgroundColor: '#393939',
  },
  box1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#DFDEDE',
    opacity: 0.5,
    height: 50,
    width: 220,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
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
  listImg: {
    borderRadius: 20,
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'wheat',
  },
  home: {
    flex: 1,
    flexDirection: 'row',
  },
  img: {
    width: 265,
    height: 168,
    flexDirection: 'row',
  },
  bg: {
    width: 393,
    height: 280,
  },
});

export default Home;
