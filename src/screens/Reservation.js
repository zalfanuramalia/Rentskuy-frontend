import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Input, NativeBaseProvider, Button, Box} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Stepper from '../helpers/stepper';
import {useSelector, useDispatch} from 'react-redux';
import {dataReservation} from '../redux/actions/reservation';
import Selects from '../components/Select';

const Reservation = ({route}) => {
  const {reservation} = useSelector(state => state);
  const navigation = useNavigation();
  const {id: idVehicle} = route.params;

  const [idCard, setIdCard] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [paymentType, setPaymentType] = useState('');
  const [control, setControl] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (reservation.reservationData !== null && control) {
      navigation.navigate('Order', {id: idVehicle});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reservation.reservationData]);

  const reservationHandler = () => {
    const data = {
      idCard: idCard,
      firstname: firstname,
      lastname: lastname,
      mobileNumber: mobileNumber,
      email: email,
      paymentType: paymentType,
    };
    dispatch(dataReservation(data));
    setControl(true);
  };
  return (
    <NativeBaseProvider>
      <Box style={styles.main}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details', {id: idVehicle})}>
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
            placeholder="ID Card Number"
            placeholderTextColor="grey"
            style={styles.input}
            value={idCard}
            onChangeText={setIdCard}
          />
        </View>
        <View>
          <TextInput
            placeholder="Name"
            placeholderTextColor="grey"
            style={styles.input}
            value={firstname}
            onChangeText={setFirstname}
          />
        </View>
        <View>
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="grey"
            style={styles.input}
            value={lastname}
            onChangeText={setLastname}
          />
        </View>
        <View>
          <TextInput
            placeholder="Mobile Phone (must be active)"
            placeholderTextColor="grey"
            style={styles.input}
            value={mobileNumber}
            onChangeText={setMobileNumber}
          />
        </View>
        <View>
          <TextInput
            placeholder="Email address"
            placeholderTextColor="grey"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputSelect}>
          <Selects
            width="100%"
            placeholder="Payment Type"
            placeholderTextColor="grey"
            variant="reservation"
            select={paymentType}
            change={itemValue => setPaymentType(itemValue)}>
            <Selects.Item label="Prepayment" value={'Prepayment'} />
            <Selects.Item label="Payment at end" value={'Payment at end'} />
            <Selects.Item label="Partial payment" value={'Partial payment'} />
          </Selects>
          {/* <TextInput
            placeholder="Payment type"
            placeholderTextColor="grey"
            style={styles.input}
            value={paymentType}
            onChangeText={setPaymentType}
          /> */}
        </View>
        <Button
          style={styles.reservationBtn}
          variant="solid"
          _text={{
            color: 'black',
            fontSize: '2xl',
          }}
          onPress={reservationHandler}>
          Order Vehicles
        </Button>
        <Button
          style={styles.reservationBtn}
          variant="solid"
          _text={{
            color: 'black',
            fontSize: '2xl',
          }}
          onPress={() => navigation.navigate('Order', {id: idVehicle})}>
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
  inputSelect: {
    marginTop: 20,
  },
});

export default Reservation;
