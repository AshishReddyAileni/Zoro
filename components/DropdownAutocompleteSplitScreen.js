import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Autocomplete from 'react-native-dropdown-autocomplete'; // Add this import statement

// Rest of the code remains the same


const { width, height } = Dimensions.get('window');

const DropdownAutocompleteSplitScreen = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [text, setText] = useState('');

  const handleItemSelect = (item) => {
    setText('');
    setSelectedItems((prevItems) => [...prevItems, item]);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.selectedItem}>
        <Text>{item}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftPane}>
        <Autocomplete
          style={styles.autocomplete}
          data={['Option 1', 'Option 2', 'Option 3', 'Option 4']} // Replace with your own data source
          value={text}
          onChangeText={setText}
          placeholder="Type to search"
          renderItem={({ item }) => <Text>{item}</Text>}
          onItemSelect={handleItemSelect}
        />
      </View>
      <View style={styles.rightPane}>
        <FlatList
          data={selectedItems}
          keyExtractor={(item) => item}
          renderItem={renderItem}
          contentContainerStyle={styles.selectedItemsContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  leftPane: {
    flex: 1,
    paddingRight: 5,
  },
  rightPane: {
    flex: 1,
    paddingLeft: 5,
  },
  autocomplete: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    height: 40,
  },
  selectedItemsContainer: {
    flexGrow: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
  },
  selectedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
});

export default DropdownAutocompleteSplitScreen;


