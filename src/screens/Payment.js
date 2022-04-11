import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NativeBaseProvider, Button, Box, ScrollView} from 'native-base';
import Stepper from '../helpers/stepper';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ReactNativeNumberFormat} from '../helpers/numberformat';
import {useSelector, useDispatch} from 'react-redux';
import {getDetailHistory, historyInput} from '../redux/actions/history';
import ModalPoup from '../components/Modalpoup';

const Payment = ({route}) => {
  const {reservation, history, auth, vehicle} = useSelector(state => state);
  const navigation = useNavigation();
  const [control, setControl] = useState(false);
  const dispatch = useDispatch();
  const {id: idVehicle} = route.params;
  const [visible, setVisible] = React.useState(false);
  const randomCode = Math.floor(
    Math.pow(10, 8 - 1) +
      Math.random() * (Math.pow(10, 8) - Math.pow(10, 8 - 1) - 1),
  );

  useEffect(() => {
    dispatch(getDetailHistory(auth.token, history.historyData.idVehicle));
  }, [auth.token, history.historyData.idVehicle, dispatch]);

  useEffect(() => {
    setVisible(true);
    if (history.historyData !== null && control) {
      navigation.navigate('SeeHistory');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.historyData]);

  return (
    <NativeBaseProvider>
      <ScrollView>
        <Box style={styles.main}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Reservation', {id: idVehicle})}>
            <View style={styles.text}>
              <Icon name="chevron-left" size={20} style={styles.icon} />
              <Text style={styles.payment}>Payment</Text>
            </View>
          </TouchableOpacity>
          <Box style={styles.stepper}>
            <Stepper active={3} count={3} weight={50} />
          </Box>
          <Box style={styles.form}>
            <Text style={styles.code}>Payment Code :</Text>
            <Text style={styles.codepay}>{randomCode}</Text>
            <Text style={styles.time}>
              Insert your payment code while you transfer booking order Pay
              before :
            </Text>
            <Text style={styles.timepay}>1:59:34</Text>
            <Text style={styles.bank}>Bank account information :</Text>
            <Text style={styles.bankpay}>0290-90203-345-2</Text>
            <Text style={styles.vehicle}>RENTSKUY</Text>
          </Box>
          <View style={styles.border} />
          <Box style={styles.form}>
            <Text style={styles.book}>Booking code : VSP09875</Text>
            <Text style={styles.codebook}>
              Use booking code to pick up your vespa
            </Text>
            <Button
              style={styles.bookingBtn}
              variant="solid"
              _text={{
                color: 'black',
              }}
              onPress={() => navigation.navigate('Payment')}>
              Copy Payment & Booking Code
            </Button>
          </Box>
          <Box style={styles.form2}>
            <Text>Order Details :</Text>
            <Text>
              {vehicle.dataDetail.qty} {vehicle.dataDetail.brand}
            </Text>
            <Text>{reservation.reservationData.payment_type}</Text>
            <Text>{`${vehicle.dataDetail.countDay} days`}</Text>
            <Text>Jan 18 2021 to Jan 22 2021</Text>
          </Box>
          <View style={styles.border} />
          <Box style={styles.price}>
            <Text style={styles.textPrice}>
              <ReactNativeNumberFormat
                value={vehicle.dataDetail.totalPayment}
              />
            </Text>
            <Icon name="info-circle" />
          </Box>
          <Box>
            <Button
              style={styles.reservationBtn}
              variant="solid"
              _text={{
                color: 'black',
                fontSize: '2xl',
              }}
              onPress={() => navigation.navigate('See History')}>
              Finish Payment
            </Button>
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

              <Text style={styles.infosuccess}>
                Your payment has been received!
              </Text>
            </ModalPoup>
          </Box>
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
  textPrice: {
    fontSize: 28,
  },
  border: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginTop: 15,
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookingBtn: {
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: 'wheat',
  },
  reservationBtn: {
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: 'wheat',
  },
  form: {
    marginTop: 20,
    alignItems: 'center',
  },
  code: {
    fontSize: 18,
  },
  codepay: {
    fontSize: 36,
    marginTop: 10,
    fontWeight: '700',
  },
  time: {
    fontSize: 13,
    marginTop: 10,
  },
  timepay: {
    fontSize: 24,
    marginTop: 5,
    color: 'red',
  },
  bank: {
    fontSize: 16,
    marginTop: 10,
  },
  bankpay: {
    fontSize: 24,
    marginTop: 10,
    fontWeight: '700',
  },
  vehicle: {
    fontSize: 16,
    marginTop: 10,
  },
  book: {
    fontSize: 18,
    fontWeight: '700',
  },
  codebook: {
    fontSize: 13,
    marginTop: 5,
  },
  form2: {
    marginTop: 5,
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

export default Payment;
