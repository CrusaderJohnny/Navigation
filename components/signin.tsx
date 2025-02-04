import { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
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
      <Text>Log In</Text>
      <TextInput style={styles.container}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      ></TextInput>
      <TextInput style={styles.container}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      ></TextInput>
      <Button title="Login" onPress={handleLogin}></Button>
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
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
});
