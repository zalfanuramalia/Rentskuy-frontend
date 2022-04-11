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
import {
  deleteVehicles,
  getDetailVehicle,
  onReservation,
  updateVehicle,
} from '../redux/actions/vehicle';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from '../redux/actions/button';
import Iconic from 'react-native-vector-icons/Fontisto';
import {Picker} from '@react-native-picker/picker';
import ModalPoup from '../components/Modalpoup';
import {launchImageLibrary} from 'react-native-image-picker';

const Detail = ({route, navigation}) => {
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState(0);
  const [can_prepayment, setCan_Preypayment] = useState('');
  const [isAvailable, setIsAvailable] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');
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
  const [visible, setVisible] = React.useState(false);

  // const navigation = useNavigation();

  useEffect(() => {
    dispatch(getDetailVehicle(idVehicle));
  }, [idVehicle, dispatch]);

  const {vehicle, auth} = useSelector(state => state);

  useEffect(() => {
    dispatch({
      type: 'CLEAR_UPDATE_MESSAGE',
    });
  }, [dispatch]);

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

  const addImage = async () => {
    const photo = await launchImageLibrary({});
    setImage(photo.assets[0]);
  };

  const deleteHandler = id => {
    setVisible(true);
    dispatch(deleteVehicles(idVehicle));
  };

  const closeHandler = () => {
    setVisible(false);
    navigation.navigate('Home');
  };

  const updateVehicleHandler = () => {
    setVisible(true);
    dispatch(
      updateVehicle(
        vehicle.detailVehicle.id,
        auth.token,
        brand,
        price,
        can_prepayment,
        isAvailable,
        location,
        qty,
        image,
      ),
    );
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
              {image ? (
                <Image
                  source={{uri: image.uri}}
                  resizeMode="contain"
                  style={styles.img}
                />
              ) : (
                <Image
                  source={{uri: vehicle.detailVehicle.image} || order}
                  resizeMode="contain"
                  style={styles.img}
                />
              )}
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
                  <TouchableOpacity style={styles.hearticon} onPress={addImage}>
                    <Icon name="pencil-alt" size={20} color="white" />
                  </TouchableOpacity>
                </View>
              </Box>
            </View>
            <Stack style={styles.content}>
              <Box style={[styles.detailHeadWrapper]}>
                <Box>
                  <TextInput
                    style={styles.textBrand}
                    onChangeText={setBrand}
                    value={brand ? brand : vehicle.detailVehicle.brand}
                    placeholderTextColor="grey"
                  />
                  <TextInput
                    style={styles.textPrice}
                    value={
                      price
                        ? `${price.toLocaleString()}`
                        : String(vehicle.detailVehicle?.price)
                    }
                    onChangeText={setPrice}
                    keyboardType="number"
                  />
                </Box>
                <TouchableOpacity
                  onPress={deleteHandler}
                  style={styles.heartIconWrapper}>
                  <Icon
                    name="trash-alt"
                    style={styles.chat}
                    size={10}
                    color="#FFCD61"
                  />
                  <ModalPoup visible={visible}>
                    <View alignItems="center">
                      <View style={styles.header}>
                        <TouchableOpacity onPress={closeHandler}>
                          <Image
                            source={require('../../images/x.png')}
                            style={styles.false}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View alignItems="center">
                      <Image
                        source={require('../../images/success.png')}
                        style={styles.success}
                      />
                    </View>

                    <Text style={styles.infosuccess}>Delete Successfully!</Text>
                  </ModalPoup>
                </TouchableOpacity>
              </Box>
              <Box style={styles.descWrapper}>
                <Text style={styles.desc}>Max for 1 person</Text>
                <TextInput
                  onChangeText={setCan_Preypayment}
                  value={
                    can_prepayment
                      ? can_prepayment
                      : vehicle.detailVehicle.can_prepayment
                  }
                  placeholderTextColor="grey"
                />
                <Text style={[styles.desc, styles.availableText]}>
                  {vehicle.detailVehicle.isAvailable}
                </Text>
              </Box>

              <Box style={styles.infoWrapper}>
                <Icon name="map-marker-alt" style={styles.mapWrapper} />
                <TextInput
                  style={styles.location}
                  onChangeText={setLocation}
                  value={location ? location : vehicle.detailVehicle.location}
                  placeholderTextColor="grey"
                />
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
                  selectedValue={isAvailable}
                  onValueChange={(itemValue, itemIndex) =>
                    setIsAvailable(itemValue)
                  }>
                  {/* <Picker.item label="Select Location" color="gray" value={null} /> */}
                  <Picker.Item label="Update stock status" color="gray" />
                  <Picker.Item
                    label="Available"
                    value={'Available'}
                    color="gray"
                  />
                  <Picker.Item
                    label="Full Booked"
                    value={'Not Available'}
                    color="gray"
                  />
                </Picker>
              </Box>
              <ModalPoup visible={visible}>
                <View alignItems="center">
                  <View style={styles.header}>
                    <TouchableOpacity onPress={() => setVisible(false)}>
                      <Image
                        source={require('../../images/x.png')}
                        style={styles.false}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View alignItems="center">
                  <Image
                    source={require('../../images/success.png')}
                    style={styles.success}
                  />
                </View>

                <Text style={styles.infosuccess}>Update Successfully!</Text>
              </ModalPoup>
              <Button
                style={styles.reservationBtn}
                variant="solid"
                onPress={updateVehicleHandler}
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
    width: 400,
    height: 255,
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
    alignItems: 'center',
  },
  textBrand: {
    fontSize: 28,
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
    marginHorizontal: 5,
  },
  textDesc: {
    marginHorizontal: 3,
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
    marginHorizontal: 5,
  },
  counterSection: {
    marginHorizontal: 5,
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
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'rgba(99, 110, 114,0.7)',
    borderRadius: 10,
    marginHorizontal: 5,
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
    marginHorizontal: 5,
    borderRadius: 10,
    marginTop: 15,
    backgroundColor: 'wheat',
  },
  false: {
    width: 30,
    height: 30,
  },
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  success: {
    height: 150,
    width: 150,
    marginVertical: 10,
  },
  infosuccess: {
    marginVertical: 30,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Detail;
