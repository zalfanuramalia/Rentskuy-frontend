import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Box, NativeBaseProvider, Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Stepper from '../helpers/stepper';
import {ReactNativeNumberFormat} from '../helpers/numberformat';
import {fontStyle, fontFamily, fontSize} from '../helpers/colorStyle';
import {useSelector, useDispatch} from 'react-redux';
import {historyInput} from '../redux/actions/history';
import {getDetailVehicle, onReservation} from '../redux/actions/vehicle';
import PushNotification from 'react-native-push-notification';

const Order = ({route}) => {
  const {reservation, order, history, auth, vehicle} = useSelector(
    state => state,
  );
  const qty = vehicle.dataDetail.qty;
  const countDay = vehicle.dataDetail.countDay;
  const date = vehicle.dataDetail.rentStartDate;
  const returned = 'No';
  const navigation = useNavigation();
  const [control, setControl] = useState(false);
  const dispatch = useDispatch();
  const {id: idVehicle} = route.params;

  const localNotif = () => {
    PushNotification.localNotification({
      channelId: 'rent-skuy',
      message: 'Your order has been received. Please make payment! ',
      title: 'Order Information',
    });
  };

  useEffect(() => {
    console.log(vehicle);
    dispatch(onReservation(vehicle.detailVehicle, qty, countDay, date));
    if (history.historyData !== null && control) {
      navigation.navigate('Payment', {
        id: idVehicle,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idVehicle, dispatch]);

  const orderHandler = () => {
    dispatch(
      historyInput(auth.userData.id, String(idVehicle), returned, auth.token),
    );
    localNotif();
    navigation.navigate('Payment', {
      id: idVehicle,
    });
    // setControl(true);
  };

  return (
    <NativeBaseProvider>
      <Box style={styles.main}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Reservation', {id: idVehicle})}>
          <View style={styles.text}>
            <Icon name="chevron-left" size={20} style={styles.icon} />
            <Text style={styles.payment}>Payment</Text>
          </View>
        </TouchableOpacity>
        <Box style={styles.stepper}>
          <Stepper active={2} count={3} weight={50} />
        </Box>
        <View style={styles.container}>
          <Image
            source={{uri: `${vehicle.dataDetail.image}`}}
            style={styles.vehicles}
            resizeMode="contain"
            width={338}
            height={201}
          />
        </View>
        <Box style={styles.descWrapper}>
          <Text style={styles.desc}>
            {vehicle.dataDetail.qty} {vehicle.dataDetail.brand}
          </Text>
          <Text style={styles.desc}>
            {reservation.reservationData.payment_type}
          </Text>
          <Text
            style={styles.desc}>{`${vehicle.dataDetail.countDay} days`}</Text>
          <Text style={styles.desc}>Jan 18 2021 to Jan 22 2021</Text>
        </Box>
        <View style={styles.border} />
        <Box style={styles.price}>
          <Text style={styles.textPrice}>
            <ReactNativeNumberFormat value={vehicle.dataDetail.totalPayment} />
          </Text>
          <Icon
            name="info-circle"
            size={20}
            color="grey"
            style={styles.detail}
          />
        </Box>
        <Button
          style={styles.reservationBtn}
          variant="solid"
          _text={{
            color: 'black',
            fontSize: '2xl',
          }}
          onPress={orderHandler}>
          Get Payment Code
        </Button>
      </Box>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  stepper: {
    marginTop: 20,
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {
    fontSize: 18,
  },
  payment: {
    paddingHorizontal: 10,
    fontSize: 18,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  reservationBtn: {
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: 'wheat',
  },
  descWrapper: {
    marginTop: 16,
  },
  desc: {
    fontFamily: fontStyle(fontFamily.primary, 'regular'),
    fontSize: fontSize.md,
    lineHeight: 22,
    marginTop: 8,
  },
  textPrice: {
    fontSize: 28,
  },
  border: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginTop: 20,
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
  },
  detail: {
    opacity: 0.5,
  },
  // vehicles: {
  //   width: '100%',
  //   height: '100%',
  // },
});

export default Order;
