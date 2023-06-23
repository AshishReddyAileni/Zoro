import React from 'react';
import { View } from 'react-native';
import DropdownBar from '../components/DropdownBar';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <DropdownBar />
    </View>
  );
};

export default HomeScreen;