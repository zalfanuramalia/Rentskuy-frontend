import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Box, NativeBaseProvider, Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors, fontStyle, fontFamily, fontSize} from '../helpers/colorStyle';

const SeeHistory = () => {
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <Box style={styles.main}>
        <TouchableOpacity onPress={() => navigation.navigate('Order')}>
          <View style={styles.text}>
            <Icon name="chevron-left" size={20} style={styles.icon} />
            <Text style={styles.payment}>See History</Text>
          </View>
        </TouchableOpacity>
        <Box style={styles.pay}>
          <Text style={styles.paysuccess}>Payment Success!</Text>
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
        <Box style={styles.descWrapper}>
          <Text style={styles.desc}>ID : 9087627392624</Text>
          <Text style={styles.desc}>Jessica Jane (jane@mail.com)</Text>
          <Text style={styles.desc}>0890876789</Text>
          <Text style={styles.desc}>Jakarta, Indonesia</Text>
        </Box>
        <Button
          style={styles.reservationBtn}
          variant="solid"
          _text={{
            color: 'black',
            fontSize: '2xl',
          }}
          onPress={() => navigation.navigate('Histories')}>
          Total : 245.000
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
  paysuccess: {
    fontSize: 24,
    color: '#087E0D',
  },
  pay: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
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
    marginTop: 8,
  },
  border: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginTop: 20,
  },
  reservationBtn: {
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: 'wheat',
  },
});

export default SeeHistory;
