// SplitScreenWithTable.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplitScreenWithTable = ({ route }) => {
  const { selectedImage } = route.params;
  const navigation = useNavigation();

  const [availableOptions, setAvailableOptions] = useState([
    'X->R->5',
    'X->L->5',
    'X->R->15',
    'X->L->15',
  ]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleOptionPress = (option) => {
    if (!selectedOptions.includes(option)) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleRemoveOption = (option) => {
    const updatedOptions = selectedOptions.filter((item) => item !== option);
    setSelectedOptions(updatedOptions);
  };

  const handleSaveOptions = () => {
    if (selectedOptions.includes('X->R->5')) {
      // Perform the moveImageToRight operation here
      moveImageToRight();
    }
    else if (selectedOptions.includes('X->L->5')) {
      // Perform the moveImageToRight operation here
      moveImageToLeft();
    }
    else if (selectedOptions.includes('X->R->15')) {
      // Perform the moveImageToRight operation here
      moveImageToR();
    }
    else if (selectedOptions.includes('X->L->15')) {
      // Perform the moveImageToRight operation here
      moveImageToL();
    }

    // Store the selected options in a variable or perform any other action you need

    // Navigate to the main screen
    navigation.navigate('MainScreen'); // Replace 'MainScreen' with the name of your main screen component
  };

  const moveImageToRight = () => {
    setCoordinates((prevCoordinates) => ({
      ...prevCoordinates,
      x: prevCoordinates.x + 5,
    }));
  };

  const moveImageToLeft = () => {
    setCoordinates((prevCoordinates) => ({
      x: prevCoordinates.x - 5,
      y: prevCoordinates.y,
    }));
  };
  const moveImageToR = () => {
    setCoordinates((prevCoordinates) => ({
      ...prevCoordinates,
      x: prevCoordinates.x + 5,
    }));
  };
  const moveImageToL = () => {
    setCoordinates((prevCoordinates) => ({
      x: prevCoordinates.x - 15,
      y: prevCoordinates.y,
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.leftPane}>
        <Text style={styles.title}>FUNCTIONALITIES</Text>
        <FlatList
          data={availableOptions}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.optionButton, selectedOptions.includes(item) && styles.selectedOptionButton]}
              onPress={() => handleOptionPress(item)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.optionList}
        />
      </View>
      <View style={styles.rightPane}>
        <Text style={styles.title}>ACTIONS</Text>
        <FlatList
          data={selectedOptions}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View style={styles.selectedOptionRow}>
              <Text style={styles.selectedOptionText}>{item}</Text>
              <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveOption(item)}>
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
          contentContainerStyle={styles.selectedOptionsTable}
        />
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveOptions}>
        <Text style={styles.saveButtonText}>Confirm</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  leftPane: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
    marginRight: 5,
  },
  rightPane: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
    marginLeft: 5,
  },
  optionList: {
    flexGrow: 1,
  },
  optionButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'green',
    marginBottom: 10,
  },
  selectedOptionButton: {
    backgroundColor: 'lightgreen',
  },
  selectedOptionsTable: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
    padding: 10,
    flexGrow: 1,
  },
  selectedOptionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: 'lightgreen',
  },
  selectedOptionText: {
    flex: 1,
  },
  removeButton: {
    marginLeft: 10,
    padding: 5,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  removeButtonText: {
    color: 'white',
  },
  saveButton: {
    alignSelf: 'center',
    backgroundColor: '#000080',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default SplitScreenWithTable;
