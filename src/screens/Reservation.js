import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';
import {Input, NativeBaseProvider, Button, Box} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Stepper from '../helpers/stepper';

const Reservation = () => {
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <Box style={styles.main}>
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <View style={styles.text}>
            <Icon name="chevron-left" size={20} style={styles.icon} />
            <Text style={styles.payment}>Payment</Text>
          </View>
        </TouchableOpacity>
        <Box style={styles.stepper}>
          <Stepper active={1} count={3} weight={50} />
        </Box>
        <View>
          <TextInput
            name="location"
            placeholder="ID Card Number"
            placeholderTextColor="grey"
            style={styles.input}
          />
        </View>
        <View>
          <TextInput
            name="location"
            placeholder="Name"
            placeholderTextColor="grey"
            style={styles.input}
          />
        </View>
        <View>
          <TextInput
            name="location"
            placeholder="Last Name"
            placeholderTextColor="grey"
            style={styles.input}
          />
        </View>
        <View>
          <TextInput
            name="location"
            placeholder="Mobile Phone (must be active)"
            placeholderTextColor="grey"
            style={styles.input}
          />
        </View>
        <View>
          <TextInput
            name="location"
            placeholder="Email address"
            placeholderTextColor="grey"
            style={styles.input}
          />
        </View>
        <View>
          <TextInput
            name="location"
            placeholder="Payment type"
            placeholderTextColor="grey"
            style={styles.input}
          />
        </View>
        <Button
          style={styles.reservationBtn}
          variant="solid"
          _text={{
            color: 'black',
            fontSize: '2xl',
          }}
          onPress={() => navigation.navigate('Order')}>
          Order Vehicles
        </Button>
        <Button
          style={styles.reservationBtn}
          variant="solid"
          _text={{
            color: 'black',
            fontSize: '2xl',
          }}
          onPress={() => navigation.navigate('Order')}>
          See Order Details
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
  stepper: {
    marginTop: 20,
  },
  reservationBtn: {
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: 'wheat',
  },
  input: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#DFDEDE',
    opacity: 0.5,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default Reservation;
