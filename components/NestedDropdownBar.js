import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, PanResponder } from 'react-native';

const NestedDropdownBar = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const panResponderRef = useRef(null);

  const questions = ['Question 1', 'Question 2', 'Question 3', 'Question 4'];

  const options = [
    [
      { label: 'Option A', enabled: true },
      { label: 'Option B', enabled: true },
      { label: 'Option C', enabled: true },
      { label: 'Option D', enabled: true },
    ],
    [
      { label: 'Option E', enabled: true },
      { label: 'Option F', enabled: true },
      { label: 'Option G', enabled: true },
      { label: 'Option H', enabled: true },
    ],
    [
      { label: 'Option I', enabled: true },
      { label: 'Option J', enabled: true },
      { label: 'Option K', enabled: true },
      { label: 'Option L', enabled: true },
    ],
    [
      { label: 'Option M', enabled: true },
      { label: 'Option N', enabled: true },
      { label: 'Option O', enabled: true },
      { label: 'Option P', enabled: true },
    ],
  ];

  const selectOption = (questionIndex, optionIndex) => {
    const selectedQuestionOptions = selectedOptions[questionIndex] || [];
    const optionLabel = options[questionIndex][optionIndex].label;
    const isOptionSelected = selectedQuestionOptions.includes(optionLabel);

    let updatedOptions;
    if (isOptionSelected) {
      updatedOptions = selectedQuestionOptions.filter((selectedOption) => selectedOption !== optionLabel);
    } else {
      updatedOptions = [...selectedQuestionOptions, optionLabel];
    }

    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[questionIndex] = updatedOptions;

    setSelectedOptions(updatedSelectedOptions);
  };

  const initializePanResponder = () => {
    panResponderRef.current = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.dy > 50) {
          console.log('Sliding down');
          // Slide down logic
        }
      },
    });
  };

  React.useEffect(() => {
    initializePanResponder();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Dropdown Bars</Text>
        {questions.map((question, questionIndex) => (
          <View key={questionIndex} style={styles.dropdownContainer}>
            <Text style={styles.questionText}>{question}</Text>
            <View style={styles.dropdownBar} {...panResponderRef.current?.panHandlers}>
              {options[questionIndex].map((option, optionIndex) => (
                <TouchableOpacity
                  key={optionIndex}
                  style={[
                    styles.optionButton,
                    {
                      backgroundColor: option.enabled
                        ? selectedOptions[questionIndex]?.includes(option.label)
                          ? '#e0e0e0'
                          : '#f0f0f0'
                        : '#f0f0f0',
                    },
                  ]}
                  onPress={() => selectOption(questionIndex, optionIndex)}
                  disabled={!option.enabled}
                >
                  <Text style={styles.optionText}>{option.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.title}>Selected Options</Text>
        <View style={styles.selectedOptionsContainer}>
          {selectedOptions.map((selectedQuestionOptions, questionIndex) => (
            <View key={questionIndex} style={styles.selectedQuestionContainer}>
              <Text style={styles.selectedQuestionText}>{questions[questionIndex]}</Text>
              {selectedQuestionOptions.map((selectedOption, index) => (
                <TouchableOpacity key={index} style={styles.selectedOptionButton}>
                  <Text style={styles.selectedOptionText}>{selectedOption}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 1,
    padding: 20,
  },
  rightContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dropdownContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dropdownBar: {
    borderRadius: 5,
  },
  optionButton: {
    padding: 10,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 14,
  },
  selectedOptionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  selectedQuestionContainer: {
    marginBottom: 10,
  },
  selectedQuestionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  selectedOptionButton: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  selectedOptionText: {
    fontSize: 16,
  },
});

export default NestedDropdownBar;
