import { View, Text, StyleSheet } from "react-native"

const Welcome = () => {
    return (
        <View style={styles.container}>
            <Text>
                Welcome To the page
            </Text>
        </View>
    )
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})