import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Box, NativeBaseProvider, Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useSelector, useDispatch} from 'react-redux';
import React, {useState, useEffect} from 'react';
import {getDetailHistory} from '../redux/actions/vehicle';
import {fontStyle, fontFamily, fontSize} from '../helpers/colorStyle';
import {ReactNativeNumberFormat} from '../helpers/numberformat';

const SeeHistory = ({route}) => {
  const {reservation, history, auth, vehicle} = useSelector(state => state);
  const navigation = useNavigation();
  const [control, setControl] = useState(false);
  const dispatch = useDispatch();
  // const {idHistory: history.detailHistory.id} = route.params;

  // useEffect(() => {
  //   dispatch(getDetailHistory(auth.token, history.historyData.usersId));
  // }, [auth.token, history.historyData.usersId, dispatch]);

  // useEffect(() => {
  //   if (history.historyData !== null && control) {
  //     navigation.navigate('History', {
  //       idHistory: history.historyData.usersId,
  //     });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [history.historyData]);
  return (
    <NativeBaseProvider>
      <Box style={styles.main}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Payment', {
              idHistory: history.historyData.id_users,
            })
          }>
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
        <Box style={styles.descWrapper}>
          <Text style={styles.desc}>
            ID : {reservation.reservationData.idCard}
          </Text>
          <Text style={styles.desc}>
            {reservation.reservationData.fullname} (
            {reservation.reservationData.emailAddress})
          </Text>
          <Text style={styles.desc}>
            {reservation.reservationData.mobilePhone}
          </Text>
          <Text style={styles.desc}>Jakarta, Indonesia</Text>
        </Box>
        <Button
          style={styles.reservationBtn}
          variant="solid"
          _text={{
            color: 'black',
            fontSize: '2xl',
          }}
          onPress={() =>
            navigation.navigate('Histories', {id: auth.userData.id})
          }>
          <Text style={styles.total}>
            Total :{' '}
            {
              <ReactNativeNumberFormat
                value={vehicle.dataDetail.totalPayment}
              />
            }
          </Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  total: {
    fontSize: 24,
    fontWeight: '800',
  },
});

export default SeeHistory;
