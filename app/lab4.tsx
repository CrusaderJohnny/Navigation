import vacationDestinations from "../constants/List_items";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function App() {
  const [selectedDestinations, setSelectedDestinations] = useState<number[]>([]);

  const toggleSelection = (id: number) => {
    setSelectedDestinations((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((destinationId) => destinationId !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={vacationDestinations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const isSelected = selectedDestinations.includes(item.id);
          return (
            <TouchableOpacity
              style={[styles.item, isSelected && styles.selectedItem]}
              onPress={() => toggleSelection(item.id)}
            >
              <Text style={styles.location}>{item.location}</Text>
              <Text>Price: ${item.price}</Text>
              <Text>Avg Temp: {item.average_yearly_temperature}</Text>
              {isSelected && <Text style={styles.checkMark}>✓</Text>}
            </TouchableOpacity>
          );
        }}
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedItem: {
    backgroundColor: "#b6fcb6", // Light green background for selected items
  },
  location: {
    fontSize: 18,
    fontWeight: "bold",
  },
  checkMark: {
    color: "green",
    fontSize: 20,
    fontWeight: "bold",
  },
});
