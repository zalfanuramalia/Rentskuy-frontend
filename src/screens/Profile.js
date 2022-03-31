import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {people} from '../image/index';
import {
  NativeBaseProvider,
  VStack,
  Box,
  Divider,
  Container,
  HStack,
  Pressable,
} from 'native-base';

const Profile = () => {
  return (
    <NativeBaseProvider>
      <Box
        shadow="2"
        py="4"
        px="3"
        rounded="md"
        height={200}
        maxWidth="100%"
        style={styles.texts}>
        <HStack>
          <Box justifyContent="space-between">
            <VStack space="2">
              <Text fontSize="sm" color="white">
                Today @ 9PM
              </Text>
              <Text color="white" fontSize="xl">
                Let's talk about avatar!
              </Text>
            </VStack>
            <Pressable
              rounded="xs"
              bg="primary.400"
              alignSelf="flex-start"
              py="1"
              px="3">
              <Text
                textTransform="uppercase"
                fontSize="sm"
                fontWeight="bold"
                color="white">
                Remind me
              </Text>
            </Pressable>
          </Box>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  texts: {
    fontFamily: 'Roboto',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   mainCardView: {
//     height: 90,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 15,
//     shadowOffset: {width: 0, height: 0},
//     shadowOpacity: 1,
//     shadowRadius: 8,
//     elevation: 8,
//     flexDirection: 'row',
//     paddingLeft: 16,
//     paddingRight: 14,
//     marginTop: 6,
//     marginBottom: 6,
//     marginLeft: 16,
//     marginRight: 16,
//   },
//   subCardView: {
//     height: 50,
//     width: 50,
//     borderRadius: 25,
//     borderWidth: 1,
//     borderStyle: 'solid',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default Profile;
