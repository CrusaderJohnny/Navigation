import { router } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome To the page</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/lab_3")}
      >
        <Text>Go to Lab 3</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/(tabs)/calgary")}
      >
        <Text>Go to Assignment 2</Text>
      </TouchableOpacity>
    </View>
    
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 160,
  },
  text: {
    fontSize: 24,
    padding: 10,
    margin: 10,
  },

});
