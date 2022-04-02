import React from 'react';
import NumberFormat from 'react-number-format';
import {Text} from 'react-native';

export function ReactNativeNumberFormat({value, suffix}) {
  return (
    <NumberFormat
      value={value}
      displayType={'text'}
      thousandSeparator={true}
      suffix={suffix ? suffix : ''}
      prefix={'Rp.'}
      renderText={formattedValue => <Text>{formattedValue}</Text>} // <--- Don't forget this!
    />
  );
}
