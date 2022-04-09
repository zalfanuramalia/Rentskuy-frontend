import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Box, ScrollView} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {getAllHistoryUser} from '../redux/actions/history';
import {ReactNativeNumberFormat} from '../helpers/numberformat';

const History = ({navigation}) => {
  const {history, auth} = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHistoryUser(auth.token, auth.userData.id));
  }, [auth.token, auth.userData.id, dispatch]);
  return (
    <SafeAreaView>
      <ScrollView>
        <Box style={styles.main}>
          <Text style={styles.title}>Today</Text>
          <Box style={styles.finpay}>
            <Text style={styles.text}>
              Please finish your payment for vespa for Vespa Rental Jogja
            </Text>
            <Icon name="chevron-right" size={20} />
          </Box>
          <View style={styles.border} />
          <Box style={styles.pay}>
            <Text style={styles.text}>
              Your payment for a vintage bike at Jogja just confirmed!
            </Text>
            <Text style={styles.title}>A week ago</Text>
          </Box>
          <SafeAreaView>
            <ScrollView>
              {history.listHistory.map(item => {
                return (
                  <Box key={item.id} style={styles.listVehicles}>
                    <Box>
                      <Image
                        source={{uri: `${item.image}`}}
                        resizeMode="contain"
                        style={styles.img}
                      />
                    </Box>
                    <Box style={styles.right}>
                      <Text fontSize={'lg'} bold>
                        {item.vehicleName}
                      </Text>
                      <Text>Jan 18 to 21 2021</Text>
                      <Text fontSize={'lg'} bold>
                        Prepayment : Rp.245.000
                        {/* {
                        <ReactNativeNumberFormat
                          value={vehicle.dataDetail.totalPayment}
                        />
                      } */}
                      </Text>
                      <Text>Finished</Text>
                    </Box>
                  </Box>
                );
              })}
            </ScrollView>
          </SafeAreaView>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    marginHorizontal: 20,
  },
  border: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginTop: 20,
  },
  listVehicles: {
    flexDirection: 'row',
    marginVertical: 18,
    alignItems: 'center',
  },
  img: {
    width: 150,
    height: 120,
  },
  title: {
    color: '#C4C4C4',
    fontSize: 14,
    marginTop: 20,
  },
  finpay: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    paddingRight: 50,
    marginTop: 20,
  },
});

export default History;
