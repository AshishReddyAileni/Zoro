import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DropdownBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const options = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
        <Text style={styles.dropdownButtonText}>
          {selectedOption ? selectedOption : 'Select an item'}
        </Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdownContent}>
          <View style={styles.column}>
            {options.map((option, index) => {
              if (index % 2 === 0) {
                return (
                  <TouchableOpacity
                    key={index}
                    style={styles.optionButton}
                    onPress={() => selectOption(option)}
                  >
                    <Text style={styles.optionText}>{option}</Text>
                  </TouchableOpacity>
                );
              }
              return null;
            })}
          </View>
          <View style={styles.column}>
            {options.map((option, index) => {
              if (index % 2 !== 0) {
                return (
                  <TouchableOpacity
                    key={index}
                    style={styles.optionButton}
                    onPress={() => selectOption(option)}
                  >
                    <Text style={styles.optionText}>{option}</Text>
                  </TouchableOpacity>
                );
              }
              return null;
            })}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  dropdownButton: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
  },
  dropdownButtonText: {
    fontSize: 16,
  },
  dropdownContent: {
    position: 'absolute',
    top: 40,
    flexDirection: 'row', // Display columns side by side
  },
  column: {
    flex: 1, // Make columns occupy equal space
    paddingHorizontal: 10, // Add horizontal padding between columns
  },
  optionButton: {
    paddingVertical: 8,
  },
  optionText: {
    fontSize: 16,
  },
});

export default DropdownBar;
