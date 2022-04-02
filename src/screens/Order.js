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
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Reservation')}>
          <View style={styles.text}>
            <Icon name="chevron-left" size={20} />
            <Text>Payment</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Stepper active={2} count={3} weight={50} />
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
        <Icon name="info-circle" />
      </Box>
      <Button
        styleContainer={styles.reservationBtn}
        onPress={() => navigation.navigate('Payment')}>
        Get Payment Code
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
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  descWrapper: {
    marginTop: 16,
  },
  desc: {
    fontFamily: fontStyle(fontFamily.primary, 'regular'),
    fontSize: fontSize.md,
    lineHeight: 22,
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

export default Order;
