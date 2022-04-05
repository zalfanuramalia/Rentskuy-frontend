import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Box, ScrollView} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {SafeAreaView} from 'react-native-safe-area-context';

const History = () => {
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
          <View style={styles.listVehicles}>
            <View style={styles.left}>
              <Image
                source={require('../../images/vespa.png')}
                alt="vespa"
                resizeMode={'cover'}
                width={150}
                height={120}
                borderRadius={30}
                style={styles.image}
              />
            </View>
            <View style={styles.right}>
              <View>
                <Text fontSize={'lg'} bold>
                  Vespa Matic
                </Text>
                <Text>Jan 18 to 21 2021</Text>
                <Text fontSize={'lg'} bold>
                  Prepayment : Rp. 245.000
                </Text>
                <Text>Finished</Text>
              </View>
            </View>
          </View>
          <View style={styles.listVehicles}>
            <View style={styles.left}>
              <Image
                source={require('../../images/vintage.png')}
                alt="vespa"
                resizeMode={'cover'}
                width={150}
                height={120}
                borderRadius={30}
                style={styles.image}
              />
            </View>
            <View style={styles.right}>
              <View>
                <Text fontSize={'lg'} bold>
                  Vintage Bike Honda
                </Text>
                <Text>Jan 18 to 21 2021</Text>
                <Text fontSize={'lg'} bold>
                  Prepayment : Rp. 245.000
                </Text>
                <Text>Finished</Text>
              </View>
            </View>
          </View>
          <View style={styles.listVehicles}>
            <View style={styles.left}>
              <Image
                source={require('../../images/vintage.png')}
                alt="vespa"
                resizeMode={'cover'}
                width={150}
                height={120}
                borderRadius={30}
                style={styles.image}
              />
            </View>
            <View style={styles.right}>
              <View>
                <Text fontSize={'lg'} bold>
                  Vintage Bike Honda
                </Text>
                <Text>Jan 18 to 21 2021</Text>
                <Text fontSize={'lg'} bold>
                  Prepayment : Rp. 245.000
                </Text>
                <Text>Finished</Text>
              </View>
            </View>
          </View>
          <View style={styles.listVehicles}>
            <View style={styles.left}>
              <Image
                source={require('../../images/vintage.png')}
                alt="vespa"
                resizeMode={'cover'}
                width={150}
                height={120}
                borderRadius={30}
                style={styles.image}
              />
            </View>
            <View style={styles.right}>
              <View>
                <Text fontSize={'lg'} bold>
                  Vintage Bike Honda
                </Text>
                <Text>Jan 18 to 21 2021</Text>
                <Text fontSize={'lg'} bold>
                  Prepayment : Rp. 245.000
                </Text>
                <Text>Finished</Text>
              </View>
            </View>
          </View>
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
  },
  right: {
    marginLeft: 35,
    justifyContent: 'space-between',
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
