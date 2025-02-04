import { View } from "react-native";
import Sign_In from "../components/signin";
import { useState } from "react";
import Welcome from "../components/welcome";

export default function App() {
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
    return(
        <View>
            {isSignedIn ? <Welcome/> : <Sign_In setIsSignedIn={setIsSignedIn}/>}
            {/* <Sign_In></Sign_In> */}
        </View>
    )
}