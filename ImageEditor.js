import React, { useState } from 'react';
import { View, Button } from 'react-native';

const ImageEditor = ({ selectedImage, onRotate, onSave }) => {
  const [rotation, setRotation] = useState(0);

  const handleRotateLeft = () => {
    const newRotation = rotation - 90;
    setRotation(newRotation);
    onRotate(newRotation);
  };

  const handleRotateRight = () => {
    const newRotation = rotation + 90;
    setRotation(newRotation);
    onRotate(newRotation);
  };

  const handleSave = () => {
    onSave(rotation);
  };

  return (
    <View>
      <Button title="Rotate Left" onPress={handleRotateLeft} />
      <Button title="Rotate Right" onPress={handleRotateRight} />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default ImageEditor;
