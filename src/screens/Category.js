import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import getPopular from '../redux/actions/popular';

const Category = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {category, popular, auth} = useSelector(state => state);

  useEffect(() => {
    dispatch(getPopular());
  }, [dispatch]);
  return (
    <NativeBaseProvider>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View flexDirection="row">
            <Icon name="chevron-left" size={20} />
            <Text style={styles.text}>Hot Deals</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <SafeAreaView>
            <ScrollView>
              {popular.popular.map((datas, idx) => {
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

export default Category;
