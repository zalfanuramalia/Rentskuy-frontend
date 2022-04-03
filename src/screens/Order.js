import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Box, NativeBaseProvider, Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Stepper from '../helpers/stepper';
import {ReactNativeNumberFormat} from '../helpers/numberformat';
import {colors, fontStyle, fontFamily, fontSize} from '../helpers/colorStyle';

const Order = () => {
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <Box style={styles.main}>
        <TouchableOpacity onPress={() => navigation.navigate('Reservation')}>
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
            source={require('../../images/payment.png')}
            style={styles.vehicles}
            resizeMode="cover"
          />
        </View>
        <Box style={styles.descWrapper}>
          <Text style={styles.desc}>2 Vespa</Text>
          <Text style={styles.desc}>Prepayment (no tax)</Text>
          <Text style={styles.desc}>4 days</Text>
          <Text style={styles.desc}>Jan 18 2021 to Jan 22 2021</Text>
        </Box>
        <View style={styles.border} />
        <Box style={styles.price}>
          <Text style={styles.textPrice}>
            <ReactNativeNumberFormat value={245000} />
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
          onPress={() => navigation.navigate('Payment')}>
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
});

export default Order;
