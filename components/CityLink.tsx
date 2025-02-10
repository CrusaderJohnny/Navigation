import React from "react";
import { Text, TouchableOpacity, StyleSheet, Linking } from "react-native";

interface CityLinkProps {
    cityLink: string;
}

const CityLink = ({ cityLink }: CityLinkProps) => {
    return (
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(cityLink)}>
        <Text style={styles.linkText}>Go to city page</Text>
      </TouchableOpacity>
    );
  };

export default CityLink;

const styles = StyleSheet.create({
    linkText: {
      fontSize: 16,
      color: "#007BFF",
    },
    button: {
      borderWidth: 2, 
      borderColor: "#007BFF", 
      borderRadius: 10, 
      paddingVertical: 10, 
      paddingHorizontal: 20, 
      marginBottom: 20, 
      alignItems: "center", 
      backgroundColor: "#F0F8FF",
    },
  });