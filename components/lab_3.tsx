import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import DecrementButton from "./DecrementButton";
import IncrementButton from "./IncrementButton";


const Lab3: React.FC = () => {
    const [count, setCount] = useState(0);
    
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    return(
        <View style={styles.container}>
            <Text>Lab 3 Counter</Text>
            <Text>Counter: {count}</Text>
            <View style={styles.column}>
            <IncrementButton onIncrement={handleIncrement} />
            <DecrementButton onDecrement={handleDecrement} />
            </View>
        </View>
    );
};

export default Lab3;


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    column: {
        flexDirection: 'row',
    }
})
