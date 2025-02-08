import { Button, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Sign_In from "../components/signin";
import { useState } from "react";
import Welcome from "../components/welcome";
import { Link, router } from "expo-router";

export default function App() {
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
    return(
        <View style={styles.container}>
            {isSignedIn ? <Welcome/> : <Sign_In setIsSignedIn={setIsSignedIn}/>}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

})