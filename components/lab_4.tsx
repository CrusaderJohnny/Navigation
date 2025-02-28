import vacationDestinations from "../constants/List_items";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={vacationDestinations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.location}>{item.location}</Text>
            <Text>Price: ${item.price}</Text>
            <Text>Avg Temp: {item.average_yearly_temperature}</Text>
          </View>
        )}
      />
    </View>
  );
}


// Styles for better UI
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  item: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: "#f9c2ff",
    borderRadius: 5,
  },
  location: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
