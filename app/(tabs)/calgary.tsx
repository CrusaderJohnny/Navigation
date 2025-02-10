import React from 'react';
import { View } from 'react-native';
import CityData from '../../components/CityData';
import CityFacts from '../../components/CityFacts';

const calgaryImage = require('../../assets/calgary.jpg');

const Calgary = () => {
  return (
    <View>
      <CityData
        cityImage={calgaryImage}
        cityName="Calgary"
        cityLink="https://www.calgary.ca/home.html"
      />
      <CityFacts
        facts="Calgary is known for being a cowboy city with no real cowboys unless it's time for stampede. Calgary tower used to be the tallest building but now it's just overpriced buffet up there. They also have the bow river where people go rafting and get stuck. Oh and we have the best roads in Canada apparently."
      />
    </View>
  );
};

export default Calgary;
