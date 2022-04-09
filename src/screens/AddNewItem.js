import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import {Box, NativeBaseProvider, ScrollView, Stack, Input} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Button from '../components/Button';
import {Picker} from '@react-native-picker/picker';
import {colors, fontStyle, fontFamily, fontSize} from '../helpers/colorStyle';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {addDataVehicles} from '../redux/actions/vehicle';

const AddNewItem = () => {
  const {auth} = useSelector(state => state);
  const navigation = useNavigation();
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('Bandung');
  const [category_id, setCategory_id] = useState('3');
  const [idCategory, setIdCategory] = useState(3);
  const [qty, setQty] = useState(0);
  const [image, setImage] = useState('');
  const dispatch = useDispatch();

  const locations = ['Bandung', 'Jakarta', 'Yogyakarta', 'Depok', 'Bali'];
  const category = [
    {name: 'Car', id: 1},
    {name: 'Motorcycle', id: 2},
    {name: 'Bike', id: 3},
  ];

  const addImage = async () => {
    const photo = await launchImageLibrary({});
    setImage(photo.assets[0]);
  };

  const onIncrement = () => {
    setQty(qty + 1);
  };

  const onDecrement = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };

  const addVehiclesHandler = () => {
    // console.log(image);
    dispatch(
      addDataVehicles(
        auth.token,
        brand,
        price,
        description,
        location,
        idCategory,
        qty,
        image,
      ),
    );
  };
  return (
    <NativeBaseProvider>
      <ScrollView style={styles.main}>
        <Box>
          <TouchableOpacity
            style={styles.text}
            onPress={() => navigation.navigate('Home')}>
            <Icon name="chevron-left" size={20} style={styles.icon} />
            <Text style={styles.payment}>Add new item</Text>
            <Text style={styles.cancel}>Cancel</Text>
          </TouchableOpacity>
          <Box style={styles.mainimg}>
            {image ? (
              <Box style={styles.img}>
                <Image
                  source={{uri: image.uri}}
                  style={styles.profileImg}
                  width={160}
                  height={160}
                  borderRadius={100}
                  resizeMode="cover"
                />
              </Box>
            ) : (
              <Box style={styles.img}>
                <Image
                  source={require('../../images/upload.png')}
                  style={styles.profileImg}
                />
              </Box>
            )}
          </Box>
          <Box style={styles.btn}>
            <Button
              style={`${styles.buttons} `}
              title="Add Picture"
              onPress={addImage}
            />
          </Box>
        </Box>
        <Stack style={styles.forms}>
          <Text style={styles.label}>Name :</Text>
          <Input
            variant="underlined"
            placeholder="Input the product name min. 30 characters"
            // defaultValue={auth.userData.email}
            value={brand ? brand : ''}
            onChangeText={setBrand}
          />
        </Stack>
        <Stack style={styles.forms}>
          <Text style={styles.label}>Price :</Text>
          <Input
            variant="underlined"
            placeholder="Input the product price"
            // defaultValue={auth.userData.number}
            value={price ? price : null}
            onChangeText={setPrice}
          />
        </Stack>
        <Stack style={styles.forms}>
          <Text style={styles.label}>Description :</Text>
          <Input
            variant="underlined"
            placeholder="Type delivery information"
            // defaultValue={auth.userData.birthdate}
            value={description ? description : ''}
            onChangeText={setDescription}
          />
        </Stack>
        <Stack>
          <Text style={styles.label}>Location :</Text>
          <Box style={styles.pickerWrap}>
            <Picker
              style={styles.picker}
              selectedValue={location ? location : 'Bandung'}
              onValueChange={(itemValue, itemIndex) => setLocation(itemValue)}>
              {/* <Picker.item label="Select Location" color="gray" value={null} /> */}
              {locations.map((data, index) => (
                <Picker.Item
                  label={data}
                  value={data}
                  color="gray"
                  key={index}
                />
              ))}
            </Picker>
          </Box>
        </Stack>
        <Stack>
          <Text style={styles.labelpicker}>Add to :</Text>
          <Box style={styles.pickerWrap}>
            <Picker
              style={styles.picker}
              selectedValue={idCategory ? idCategory : null}
              onValueChange={(itemValue, itemIndex) =>
                setIdCategory(itemValue)
              }>
              {/* <Picker.item label="Select Location" color="gray" value={null} /> */}
              {category.map((data, index) => (
                <Picker.Item
                  label={data.name}
                  value={data.id}
                  color="gray"
                  key={index}
                />
              ))}
            </Picker>
          </Box>
        </Stack>
        <Box style={styles.counterSection}>
          <Text style={styles.counterText}>Available Stock</Text>
          <Box style={styles.counterWrapper}>
            <TouchableHighlight style={styles.counterBtn}>
              <Icon
                name="minus"
                style={styles.counterIcon}
                onPress={onDecrement}
              />
            </TouchableHighlight>
            <Text style={styles.countNumber}>{qty ? qty : 0}</Text>
            <TouchableHighlight style={styles.counterBtn}>
              <Icon
                name="plus"
                style={styles.counterIcon}
                onPress={onIncrement}
              />
            </TouchableHighlight>
          </Box>
        </Box>
        <Box style={styles.btn}>
          <Button
            style={`${styles.buttons} `}
            title="Save Product"
            onPress={addVehiclesHandler}
          />
        </Box>
      </ScrollView>
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
    marginTop: 20,
  },
  icon: {
    fontSize: 18,
  },
  payment: {
    paddingHorizontal: 10,
    fontSize: 18,
  },
  cancel: {
    marginHorizontal: 130,
    color: 'grey',
  },
  mainimg: {
    alignItems: 'center',
  },
  img: {
    alignItems: 'center',
    marginTop: 50,
    borderRadius: 100,
    backgroundColor: '#BABABA',
    justifyContent: 'center',
    width: 160,
    height: 160,
  },
  profileImg: {
    width: 100,
    height: 100,
  },
  forms: {
    marginVertical: 10,
  },
  reservationBtn: {
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: 'wheat',
  },
  label: {
    marginHorizontal: 8,
    fontSize: 18,
    fontWeight: '700',
  },
  labelpicker: {
    marginTop: 15,
    marginHorizontal: 8,
    fontSize: 18,
    fontWeight: '700',
  },
  pickerWrap: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'rgba(99, 110, 114,0.7)',
    borderRadius: 10,
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
  btn: {
    marginVertical: 20,
  },
});

export default AddNewItem;
