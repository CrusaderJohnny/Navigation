import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface CityFactsProps {
  facts: string;
}

const CityFacts = ({ facts }: CityFactsProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.factsText}>{facts}</Text>
    </View>
  );
};

export default CityFacts;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F0F8FF",
    borderRadius: 50,
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 0.2,
  },
  factsText: {
    fontSize: 16,
    color: "#2F4F4F",
  },
});
