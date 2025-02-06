import React from "react";
import { Button, StyleSheet, TouchableOpacity, Text } from "react-native";

interface DecrementButtonProps {
    onDecrement: () => void;
}

const DecrementButton: React.FC<DecrementButtonProps> = ({ onDecrement }) => {
    return (
        <TouchableOpacity style={styles.buttons} onPress={onDecrement}>
            <Text style={styles.buttonText}>Decrement</Text>
        </TouchableOpacity>
    );
};

export default DecrementButton;


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