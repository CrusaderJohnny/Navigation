import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
} from "react-native";
import CallAPI from "./callAPI";

const Lab5: React.FC = () => {
  const [showCallAPI, setShowCallAPI] = useState(false);

  const toggleCallAPI = () => {
    setShowCallAPI(!showCallAPI);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.button} onPress={toggleCallAPI}>
        <Text style={styles.buttonText}>
          {showCallAPI ? "Hide API Data" : "Show API Data"}
        </Text>
      </Pressable>
      {showCallAPI && <CallAPI />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Lab5;
