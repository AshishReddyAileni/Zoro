import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Draggable from 'react-native-draggable';

const App = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleDrop = (option) => {
    setSelectedOptions((prevOptions) => [...prevOptions, option]);
  };

  const handleRemove = (optionId) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.filter((prevOption) => prevOption.id !== optionId)
    );
  };

  const questions = [
    {
      id: 1,
      title: 'Question 1',
      options: [
        { id: 'option1', text: 'Option 1' },
        { id: 'option2', text: 'Option 2' },
        { id: 'option3', text: 'Option 3' },
      ],
    },
    {
      id: 2,
      title: 'Question 2',
      options: [
        { id: 'option4', text: 'Option 4' },
        { id: 'option5', text: 'Option 5' },
        { id: 'option6', text: 'Option 6' },
      ],
    },
    // Add more questions here if needed
  ];

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Questions</Text>
        <View style={styles.questionsContainer}>
          {questions.map((question) => (
            <View key={question.id} style={styles.questionContainer}>
              <Text style={styles.questionTitle}>{question.title}</Text>
              <View style={styles.optionsContainer}>
                {question.options.map((option) => (
                  <Draggable
                    key={option.id}
                    style={styles.draggable}
                    onDragRelease={() => handleDrop(option)}
                  >
                    <Text style={styles.optionText}>{option.text}</Text>
                  </Draggable>
                ))}
              </View>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.title}>Selected Options</Text>
        <View style={styles.selectedOptionsContainer}>
          {selectedOptions.map((option) => (
            <Draggable
              key={option.id}
              style={styles.draggable}
              onDragRelease={() => handleRemove(option.id)}
            >
              <Text style={styles.optionText}>{option.text}</Text>
            </Draggable>
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
  questionsContainer: {
    flex: 1,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  draggable: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 5,
  },
  optionText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  selectedOptionsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
});

export default App;
