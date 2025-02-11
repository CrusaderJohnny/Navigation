import { router } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome To My New App</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 24,
    padding: 10,
    margin: 10,
    fontWeight: "bold",
  },
});
