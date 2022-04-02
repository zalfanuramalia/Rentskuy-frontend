import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Input, NativeBaseProvider, Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Stepper from '../helpers/stepper';

const Reservation = () => {
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <View style={styles.text}>
            <Icon name="chevron-left" size={20} />
            <Text>Payment</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Stepper active={1} count={3} weight={50} />
      <View>
        <Input size="md" variants="coffee" placeholder="ID Card Number" />
      </View>
      <View>
        <Input size="md" variants="coffee" placeholder="Name" />
      </View>
      <View>
        <Input size="md" variants="coffee" placeholder="Last Name" />
      </View>
      <View>
        <Input
          size="md"
          variants="coffee"
          placeholder="Mobile Phone (must be active)"
        />
      </View>
      <View>
        <Input size="md" variants="coffee" placeholder="Email address" />
      </View>
      <View>
        <Input size="md" variants="coffee" placeholder="Payment type" />
      </View>
      <Button
        styleContainer={styles.reservationBtn}
        onPress={() => navigation.navigate('Order')}>
        Order Vehicle
      </Button>
      <Button
        styleContainer={styles.reservationBtn}
        onPress={() => navigation.navigate('Payment')}>
        See Order Details
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
});

export default Reservation;
