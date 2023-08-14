import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={Style.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Main Page"
        onPress={() => navigation.navigate('Post')}
      />
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})

export default HomeScreen;