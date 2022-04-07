import React from 'react';
import {
  Box,
  Select,
  CheckIcon,
  NativeBaseProvider,
  WarningOutlineIcon,
  FormControl,
  extendTheme,
} from 'native-base';
import {StyleSheet} from 'react-native';
// import {color} from 'native-base/lib/typescript/theme/styled-system';

const Selects = ({
  width,
  placeholder,
  selected,
  change,
  // color,
  backgroud,
  children,
}) => {
  return (
    <Box w={width}>
      <Select
        selectedValue={selected}
        minWidth="20"
        bgColor={backgroud}
        placeholder={placeholder}
        opacity="0.5"
        _selectedItem={{
          bg: 'warmGray.100',
          endIcon: <CheckIcon size="5" />,
        }}
        onValueChange={change}>
        {children}
      </Select>
    </Box>
  );
};

const addStyles = StyleSheet.create({
  backgroud: {
    backgroundColor: 'black',
  },
});

export {addStyles};
export default Selects;
