import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {NativeBaseProvider, Button, Box} from 'native-base';
import Stepper from '../helpers/stepper';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ReactNativeNumberFormat} from '../helpers/numberformat';

const Payment = () => {
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Order')}>
          <View style={styles.text}>
            <Icon name="chevron-left" size={20} />
            <Text>Payment</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Stepper active={3} count={3} weight={50} />
      <Box>
        <Text>Payment Code :</Text>
        <Text>90887620</Text>
        <Text>
          Insert your payment code while you transfer booking order Pay before :{' '}
        </Text>
        <Text>1:59:34</Text>
        <Text>Bank account information :</Text>
        <Text>0290-90203-345-2</Text>
        <Text>Vespa Rental Jogja</Text>
        <View>
          <View style={styles.border} />
        </View>
        <Text>Booking code : VSP09875</Text>
        <Text>Use booking code to pick up your vespa</Text>
        <Button
          styleContainer={styles.reservationBtn}
          onPress={() => navigation.navigate('Payment')}>
          Copy Payment & Booking Code
        </Button>
        <Text>Order Details :</Text>
        <Text>2 Vespa</Text>
        <Text>Prepayment (no tax)</Text>
        <Text>4 days</Text>
        <Text>Jan 18 2021 to Jan 22 2021</Text>
        <View>
          <View style={styles.border} />
        </View>
      </Box>
      <Box style={styles.price}>
        <Text style={styles.textPrice}>
          <ReactNativeNumberFormat value={245000} />
        </Text>
        <Icon name="info-circle" />
      </Box>
      <Button
        styleContainer={styles.reservationBtn}
        onPress={() => navigation.navigate('See History')}>
        Finish Payment
      </Button>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  text: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: 28,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  textPrice: {
    fontSize: 28,
  },
  border: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Payment;
