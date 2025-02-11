import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";
import credentials from "../credentials.json";
import { router } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type Sign_InProps = { setIsSignedIn: (isSignedIn: boolean) => void };
const image = require("../assets/loginBackground.jpg");

const Sign_In: React.FC<Sign_InProps> = ({ setIsSignedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    const user = credentials.users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setIsSignedIn(true);
    } else {
      alert("Login Failed");
    }
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.textAbove}>Log In</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          ></TextInput>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.text}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/signup")}
          >
            <Text style={styles.text}>Register</Text>
          </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Sign_In;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: 600,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
  textAbove: {
    color: "white",
    fontSize: 36,
  },
  input: {
    height: 60,
    width: 250,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "white",
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
