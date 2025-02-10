import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import CityLink from "./CityLink";  

interface CityDataProps {
  cityName: string;
  cityImage: any;  
  cityLink: string;  
}

const CityData = ({ cityImage, cityName, cityLink }: CityDataProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>{cityName}</Text>
      <Image source={cityImage} style={styles.cityImage} />
      <CityLink cityLink={cityLink} />  
    </View>
  );
};

export default CityData;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 20,
  },
  cityImage: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 40,
    borderWidth: .5,
  },
  cityName: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 15,
  },
});

