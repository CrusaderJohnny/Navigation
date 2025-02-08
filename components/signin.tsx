import { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from "react-native";
import credentials from "../credentials.json"

type Sign_InProps = { setIsSignedIn: (isSignedIn: boolean) => void};


const Sign_In: React.FC<Sign_InProps> = ({setIsSignedIn}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    const user = credentials.users.find((user) => user.username === username && user.password === password);
    if(user) {
      setIsSignedIn(true);
    }else{
      alert("Login Failed");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Log In</Text>
      <TextInput style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      ></TextInput>
      <TextInput style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={handleLogin}><Text style={styles.text}>Log in</Text></TouchableOpacity>
    </View>
  );
};

export default Sign_In;

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
    backgroundColor: 'lightblue',
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
