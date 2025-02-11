import { useState } from "react";
import {
  Alert,
  Button,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import credentials from "../credentials.json";

const validateUsername = (username: string): boolean => {
  return username.length >= 5;
};
const validatePassword = (password: string): boolean => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const signUpHandler = () => {
    if (!validateUsername(username)) {
      Alert.alert(
        "Invalid Username",
        "Username must be at least 5 characters long"
      );
      return;
    }
    if (!validatePassword(password)) {
      Alert.alert(
        "Invalid Password",
        "Password must be at least 8 characters long, include upper and lowercase, a number, and a special character"
      );
      return;
    }
    Alert.alert("Success!", "Signup Succesful!");
    console.log("Username:", username);
    console.log("Password:", password);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none" // Prevent auto-capitalization of the first letter
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry // Hide the password characters
      />
      <TouchableOpacity style={styles.button} onPress={signUpHandler}>
        <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
  },
  input: {
    height: 60,
    width: 250,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "lightblue",
    height: 50,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 10,
  },
});
