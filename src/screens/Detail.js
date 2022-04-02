import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import React from 'react';
import order from '../../images/order-1.png';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Box, NativeBaseProvider, ScrollView, Stack, Button} from 'native-base';
import {useState} from 'react';
import {colors, fontStyle, fontFamily, fontSize} from '../helpers/colorStyle';
import DateTimePickerAndroid from '@react-native-community/datetimepicker';
import {useNavigation} from '@react-navigation/native';
import {ReactNativeNumberFormat} from '../helpers/numberformat';

const Detail = () => {
  const [date, setDate] = useState(new Date());
  const [dateChanged, setDateChanged] = useState(false);
  const [countDay, setCountDay] = useState('');

  const navigation = useNavigation();

  const dateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDateChanged(true);
    setDate(currentDate);
  };

  const showMode = async () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: dateChange,
      mode: 'date',
      is24Hour: true,
    });
  };

  const countDayChange = e => {
    setCountDay(e);
  };
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <ScrollView>
          <View>
            <View style={styles.wrapper}>
              <View>
                <Image source={order} />
              </View>
              <Box style={styles.item}>
                <View style={styles.back}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Home Page')}>
                    <Icon name="chevron-left" size={30} color="white" />
                  </TouchableOpacity>
                </View>
                <View style={styles.rating}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#F8A170', '#FFCD61']}
                    style={styles.linearGradient}>
                    <Text style={styles.rate}>
                      4.5 <Icon name="star" color="white" />
                    </Text>
                  </LinearGradient>
                  <Icon
                    name="heart"
                    size={20}
                    color="white"
                    style={styles.hearticon}
                  />
                </View>
              </Box>
            </View>
            <Stack style={styles.content}>
              <Box style={[styles.detailHeadWrapper]}>
                <Box>
                  <Text style={styles.textPrice}>Vespa Matic</Text>
                  <Text style={styles.textPrice}>
                    <ReactNativeNumberFormat value={100000} suffix={'/day'} />
                  </Text>
                </Box>
                <Box style={styles.heartIconWrapper}>
                  <Icons
                    name="chatbubble-outline"
                    style={styles.chat}
                    size={30}
                    color="yellow"
                  />
                </Box>
              </Box>
              <Box style={styles.descWrapper}>
                <Text style={styles.desc}>Max for 2 person</Text>
                <Text style={styles.desc}>No prepayment</Text>
                <Text style={[styles.desc, styles.availableText]}>
                  Available
                </Text>
              </Box>

              <Box style={styles.infoWrapper}>
                <Icon name="map-marker-alt" style={styles.mapMarker} />
                <Text style={styles.location}>Jakarta</Text>
              </Box>

              <Box style={styles.infoWrapper}>
                <Icon name="walking" style={styles.mapMarker} />
                <Text style={styles.location}>
                  3.2 miles from your location
                </Text>
              </Box>

              <Box style={styles.counterSection}>
                <Text style={styles.counterText}>Select vehicles</Text>
                <Box style={styles.counterWrapper}>
                  <TouchableHighlight style={styles.counterBtn}>
                    <Icon name="minus" style={styles.counterIcon} />
                  </TouchableHighlight>
                  <Text style={styles.countNumber}>2</Text>
                  <TouchableHighlight
                    // onPress={decreaseItem}
                    style={styles.counterBtn}>
                    <Icon name="plus" style={styles.counterIcon} />
                  </TouchableHighlight>
                </Box>
              </Box>

              <Box style={styles.datePickerWrapper}>
                <TouchableHighlight
                  style={styles.datePicker}
                  underlayColor="rgba(0,0,0,0.2)"
                  onPress={showMode}>
                  <Text>
                    {dateChanged
                      ? `${date.toLocaleDateString()}`
                      : 'Select date'}
                  </Text>
                </TouchableHighlight>
                <Box style={styles.countDay}>
                  <TextInput
                    style={styles.countInput}
                    onChangeText={countDayChange}
                    keyboardType="number-pad"
                    value={countDay}
                    placeholder="1"
                  />
                  <Text style={styles.placeholder}>Day</Text>
                </Box>
              </Box>
              <Button
                styleContainer={styles.reservationBtn}
                onPress={() => navigation.navigate('Reservation')}>
                Reservation
              </Button>
            </Stack>
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    width: '100%',
  },
  item: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    width: '100%',
  },
  linearGradient: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  back: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  hearticon: {
    paddingHorizontal: 10,
  },
  chat: {
    fontSize: fontSize.xl,
  },
  content: {
    paddingHorizontal: 18,
  },
  detailHeadWrapper: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textPrice: {
    fontSize: 28,
  },
  rate: {
    color: 'white',
  },
  descWrapper: {
    marginTop: 16,
  },
  desc: {
    fontFamily: fontStyle(fontFamily.primary, 'regular'),
    fontSize: fontSize.md,
    lineHeight: 22,
  },
  availableText: {
    fontFamily: fontStyle(fontFamily.primary, 'bold'),
    color: colors.green,
  },
  infoWrapper: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterSection: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  counterText: {
    fontFamily: fontStyle(fontFamily.primary, 'bold'),
    fontSize: fontSize.lg,
  },
  countNumber: {
    fontFamily: fontStyle(fontFamily.primary, 'black'),
    fontSize: fontSize.lg,
    marginHorizontal: 34,
  },
  counterWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  datePickerWrapper: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  datePicker: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    paddingVertical: 18,
    paddingHorizontal: 14,
    borderRadius: 10,
    flex: 8,
    marginRight: 18,
  },
  countDay: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    paddingVertical: 5,
    paddingHorizontal: 14,
    borderRadius: 10,
    flex: 2,
    fontFamily: fontStyle(fontFamily.primary, 'bold'),
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  countInput: {
    width: '40%',
  },
  placeholder: {
    flex: 1,
  },
});

export default Detail;
