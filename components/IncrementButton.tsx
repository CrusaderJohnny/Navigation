import React from "react";
import { Button, StyleSheet, TouchableOpacity, Text } from "react-native";

interface IncrementButtonProps {
  onIncrement: () => void;
}

const IncrementButton: React.FC<IncrementButtonProps> = ({ onIncrement }) => {
  return (
    // <Button title="Increment" onPress={onIncrement} style={styles.buttons}/>
    <TouchableOpacity style={styles.buttons} onPress={onIncrement}>
      <Text style={styles.buttonText}>Increment</Text>
    </TouchableOpacity>
  );
};

export default IncrementButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    width: 100,
    height: 40,
    borderRadius: 10,
    borderColor: 'black',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  }
});
