import { Button, View, StyleSheet } from "react-native";
import Sign_In from "../components/signin";
import { useState } from "react";
import Welcome from "../components/welcome";
import { Link, router } from "expo-router";

export default function App() {
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
    return(
        <View style={styles.container}>
            <Button title="Go to lab 3" onPress={() => router.push('/lab_3')}/>
            <Button title="Go to sign" onPress={() => router.push('/lab_3')}/>
            {/* {isSignedIn ? <Welcome/> : <Sign_In setIsSignedIn={setIsSignedIn}/>} */}
            {/* <Sign_In></Sign_In> */}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})