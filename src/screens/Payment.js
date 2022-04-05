import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {NativeBaseProvider, Button, Box, ScrollView} from 'native-base';
import Stepper from '../helpers/stepper';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ReactNativeNumberFormat} from '../helpers/numberformat';

const Payment = () => {
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Box style={styles.main}>
          <TouchableOpacity onPress={() => navigation.navigate('Order')}>
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
            <Text style={styles.codepay}>90887620</Text>
            <Text style={styles.time}>
              Insert your payment code while you transfer booking order Pay
              before :
            </Text>
            <Text style={styles.timepay}>1:59:34</Text>
            <Text style={styles.bank}>Bank account information :</Text>
            <Text style={styles.bankpay}>0290-90203-345-2</Text>
            <Text style={styles.vehicle}>Vespa Rental Jogja</Text>
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
            <Text>2 Vespa</Text>
            <Text>Prepayment (no tax)</Text>
            <Text>4 days</Text>
            <Text>Jan 18 2021 to Jan 22 2021</Text>
          </Box>
          <View style={styles.border} />
          <Box style={styles.price}>
            <Text style={styles.textPrice}>
              <ReactNativeNumberFormat value={245000} />
            </Text>
            <Icon name="info-circle" />
          </Box>
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
});

export default Payment;
