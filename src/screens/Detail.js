import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import React from 'react';
import order from '../../images/order-1.png';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Box, NativeBaseProvider, ScrollView, Stack, Button} from 'native-base';
import {useState, useEffect} from 'react';
import {colors, fontStyle, fontFamily, fontSize} from '../helpers/colorStyle';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import {useNavigation} from '@react-navigation/native';
import {ReactNativeNumberFormat} from '../helpers/numberformat';
import {getDetailVehicle, onReservation} from '../redux/actions/vehicle';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from '../redux/actions/button';
import Iconic from 'react-native-vector-icons/Fontisto';
import {Picker} from '@react-native-picker/picker';

const Detail = ({route, navigation}) => {
  const [date, setDate] = useState(new Date());
  const [day, setDay] = useState(0);
  const [qty, setQty] = useState(0);
  const [dateChanged, setDateChanged] = useState(false);
  const [countDay, setCountDay] = useState('');
  const [favourite, setFavourite] = useState('');
  const [idCategory, setIdCategory] = useState('');
  const dispatch = useDispatch();
  const [control, setControl] = useState(false);
  const {id: idVehicle} = route.params;

  // const navigation = useNavigation();

  useEffect(() => {
    dispatch(getDetailVehicle(idVehicle));
  }, [idVehicle, dispatch]);

  const {vehicle, auth} = useSelector(state => state);

  useEffect(() => {
    if (vehicle.dataDetail !== null && control) {
      navigation.navigate('Reservation', {id: idVehicle});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vehicle.dataDetail]);

  const dateChanges = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDateChanged(true);
    setDate(currentDate);
  };

  const datePicker = async () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: dateChanges,
      mode: 'date',
      is24Hour: true,
    });
  };

  const onIncrement = () => {
    setQty(qty + 1);
  };

  const onDecrement = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };

  const countDayChange = e => {
    setCountDay(e);
  };

  const goReservation = () => {
    dispatch(onReservation(vehicle.detailVehicle, qty, countDay, date));
    navigation.navigate('Reservation', {id: idVehicle});
    // setControl(true);
  };
  return (
    <NativeBaseProvider>
      {auth.userData?.role === 'Customer' ? (
        <SafeAreaView>
          <ScrollView>
            <View style={styles.wrapper}>
              <Image
                source={{uri: vehicle.detailVehicle.image} || order}
                resizeMode="contain"
                style={styles.img}
              />
              <Box style={styles.item}>
                <View style={styles.back}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Home Page')}>
                    <Icon name="chevron-left" size={30} color="white" />
                  </TouchableOpacity>
                </View>
                <View style={styles.rating}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#F8A170', '#FFCD61']}
                    style={styles.linearGradient}>
                    <Text style={styles.rate}>
                      4.5 <Icon name="star" color="white" />
                    </Text>
                  </LinearGradient>
                  <TouchableOpacity onPress={() => setFavourite(!favourite)}>
                    {favourite ? (
                      <Icon
                        name="heart"
                        size={20}
                        color="red"
                        backgroundColor="red"
                        style={styles.hearticon}
                      />
                    ) : (
                      <Icon
                        name="heart"
                        size={20}
                        color="white"
                        style={styles.hearticon}
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </Box>
            </View>
            <Stack style={styles.content}>
              <Box style={[styles.detailHeadWrapper]}>
                <Box>
                  <Text style={styles.textPrice}>
                    {vehicle.detailVehicle.brand}
                  </Text>
                  <Text style={styles.textPrice}>
                    <ReactNativeNumberFormat
                      value={vehicle.detailVehicle.price}
                      suffix={'/day'}
                    />
                  </Text>
                </Box>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ChatList')}
                  style={styles.heartIconWrapper}>
                  <Icons
                    name="chatbubble-outline"
                    style={styles.chat}
                    size={30}
                    color="#FFCD61"
                  />
                </TouchableOpacity>
              </Box>
              <Box style={styles.descWrapper}>
                <Text style={styles.desc}>
                  Max for {vehicle.detailVehicle.qty} person
                </Text>
                <Text style={styles.desc}>
                  {vehicle.detailVehicle.can_prepayment}
                </Text>
                <Text style={[styles.desc, styles.availableText]}>
                  {vehicle.detailVehicle.isAvailable}
                </Text>
              </Box>

              <Box style={styles.infoWrapper}>
                <Icon name="map-marker-alt" style={styles.mapWrapper} />
                <Text style={styles.location}>
                  {vehicle.detailVehicle.location}
                </Text>
              </Box>

              <Box style={styles.infoWrapper}>
                <Icon name="walking" style={styles.mapWrapper} />
                <Text style={styles.location}>
                  3.2 miles from your location
                </Text>
              </Box>

              <Box style={styles.counterSection}>
                <Text style={styles.counterText}>Select vehicles</Text>
                <Box style={styles.counterWrapper}>
                  <TouchableHighlight style={styles.counterBtn}>
                    <Icon
                      name="minus"
                      style={styles.counterIcon}
                      onPress={onDecrement}
                    />
                  </TouchableHighlight>
                  <Text style={styles.countNumber}>{qty}</Text>
                  <TouchableHighlight style={styles.counterBtn}>
                    <Icon
                      name="plus"
                      style={styles.counterIcon}
                      onPress={onIncrement}
                    />
                  </TouchableHighlight>
                </Box>
              </Box>

              <Box style={styles.datePickerWrapper}>
                <TouchableOpacity
                  style={styles.datePicker}
                  underlayColor="rgba(0,0,0,0.2)"
                  onPress={datePicker}>
                  <Text>
                    {dateChanged
                      ? `${date.toLocaleDateString()}`
                      : 'Select date'}
                  </Text>

                  <Box>
                    <Iconic name="date" />
                  </Box>
                </TouchableOpacity>
                <Box style={styles.countDay}>
                  <TextInput
                    style={styles.countInput}
                    onChangeText={countDayChange}
                    keyboardType="number-pad"
                    value={countDay}
                    placeholder="1"
                  />
                  <Text style={styles.placeholder}>Day</Text>
                </Box>
              </Box>
              <Button
                style={styles.reservationBtn}
                variant="solid"
                _text={{
                  color: 'black',
                  fontSize: '2xl',
                }}
                onPress={goReservation}>
                Reservation
              </Button>
            </Stack>
          </ScrollView>
        </SafeAreaView>
      ) : (
        <SafeAreaView>
          <ScrollView>
            <View style={styles.wrapper}>
              <Image
                source={{uri: vehicle.detailVehicle.image} || order}
                resizeMode="contain"
                style={styles.img}
              />
              <Box style={styles.item}>
                <View style={styles.back}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Home Page')}>
                    <Icon name="chevron-left" size={30} color="white" />
                  </TouchableOpacity>
                </View>
                <View style={styles.rating}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#F8A170', '#FFCD61']}
                    style={styles.linearGradient}>
                    <Text style={styles.rate}>
                      4.5 <Icon name="star" color="white" />
                    </Text>
                  </LinearGradient>
                  <TouchableOpacity onPress={() => setFavourite(!favourite)}>
                    {favourite ? (
                      <Icon
                        name="heart"
                        size={20}
                        color="red"
                        backgroundColor="red"
                        style={styles.hearticon}
                      />
                    ) : (
                      <Icon
                        name="heart"
                        size={20}
                        color="white"
                        style={styles.hearticon}
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </Box>
            </View>
            <Stack style={styles.content}>
              <Box style={[styles.detailHeadWrapper]}>
                <Box>
                  <Text style={styles.textPrice}>
                    {vehicle.detailVehicle.brand}
                  </Text>
                  <Text style={styles.textPrice}>
                    <ReactNativeNumberFormat
                      value={vehicle.detailVehicle.price}
                      suffix={'/day'}
                    />
                  </Text>
                </Box>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ChatList')}
                  style={styles.heartIconWrapper}>
                  <Icons
                    name="chatbubble-outline"
                    style={styles.chat}
                    size={30}
                    color="#FFCD61"
                  />
                </TouchableOpacity>
              </Box>
              <Box style={styles.descWrapper}>
                <Text style={styles.desc}>
                  Max for {vehicle.detailVehicle.qty} person
                </Text>
                <Text style={styles.desc}>
                  {vehicle.detailVehicle.can_prepayment}
                </Text>
                <Text style={[styles.desc, styles.availableText]}>
                  {vehicle.detailVehicle.isAvailable}
                </Text>
              </Box>

              <Box style={styles.infoWrapper}>
                <Icon name="map-marker-alt" style={styles.mapWrapper} />
                <Text style={styles.location}>
                  {vehicle.detailVehicle.location}
                </Text>
              </Box>

              <Box style={styles.infoWrapper}>
                <Icon name="walking" style={styles.mapWrapper} />
                <Text style={styles.location}>
                  3.2 miles from your location
                </Text>
              </Box>

              <Box style={styles.counterSection}>
                <Text style={styles.counterText}>Update Stock</Text>
                <Box style={styles.counterWrapper}>
                  <TouchableHighlight style={styles.counterBtn}>
                    <Icon
                      name="minus"
                      style={styles.counterIcon}
                      onPress={onDecrement}
                    />
                  </TouchableHighlight>
                  <Text style={styles.countNumber}>{qty}</Text>
                  <TouchableHighlight style={styles.counterBtn}>
                    <Icon
                      name="plus"
                      style={styles.counterIcon}
                      onPress={onIncrement}
                    />
                  </TouchableHighlight>
                </Box>
              </Box>

              <Box style={styles.pickerWrap}>
                <Picker
                  style={styles.picker}
                  placeholder="update stock status"
                  selectedValue={idCategory}
                  onValueChange={(itemValue, itemIndex) =>
                    setIdCategory(itemValue)
                  }>
                  {/* <Picker.item label="Select Location" color="gray" value={null} /> */}
                  <Picker.Item
                    label=""
                    value="update stock status"
                    color="gray"
                  />
                  <Picker.Item label="1" value={1} color="gray" />
                  <Picker.Item label="2" value={2} color="gray" />
                  <Picker.Item label="3" value={3} color="gray" />
                </Picker>
              </Box>
              <Button
                style={styles.reservationBtn}
                variant="solid"
                onPress={() => navigation.navigate('Home')}
                _text={{
                  color: 'black',
                  fontSize: '2xl',
                }}>
                Update Item
              </Button>
            </Stack>
          </ScrollView>
        </SafeAreaView>
      )}
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    width: '100%',
  },
  item: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    width: '100%',
  },
  img: {
    width: 360,
    height: 300,
    backgroundColor: 'wheat',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  back: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  hearticon: {
    paddingHorizontal: 10,
  },
  chat: {
    fontSize: fontSize.xl,
  },
  content: {
    paddingHorizontal: 18,
  },
  detailHeadWrapper: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textPrice: {
    fontSize: 28,
  },
  rate: {
    color: 'white',
  },
  descWrapper: {
    marginTop: 16,
  },
  desc: {
    fontFamily: fontStyle(fontFamily.primary, 'regular'),
    fontSize: fontSize.md,
    lineHeight: 22,
  },
  availableText: {
    fontFamily: fontStyle(fontFamily.primary, 'bold'),
    color: colors.green,
  },
  infoWrapper: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 16,
  },
  counterSection: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  counterText: {
    fontFamily: fontStyle(fontFamily.primary, 'bold'),
    fontSize: fontSize.lg,
  },
  countNumber: {
    fontFamily: fontStyle(fontFamily.primary, 'black'),
    fontSize: fontSize.lg,
    marginHorizontal: 34,
  },
  counterWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    paddingHorizontal: 10,
  },
  pickerWrap: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'rgba(99, 110, 114,0.7)',
    borderRadius: 10,
  },
  datePickerWrapper: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  datePicker: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    paddingVertical: 18,
    paddingHorizontal: 14,
    borderRadius: 10,
    flex: 8,
    marginRight: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  countDay: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    paddingVertical: 5,
    paddingHorizontal: 14,
    borderRadius: 10,
    flex: 2,
    fontFamily: fontStyle(fontFamily.primary, 'bold'),
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  countInput: {
    width: '40%',
  },
  placeholder: {
    flex: 1,
  },
  reservationBtn: {
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: 'wheat',
  },
});

export default Detail;
