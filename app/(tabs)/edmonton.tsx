import React from 'react';
import { View } from 'react-native';
import CityData from '../../components/CityData';
import CityFacts from '../../components/CityFacts';

const edmontonImage = require('../../assets/edmonton.jpg');

const Edmonton = () => {
  return (
    <View>
      <CityData
        cityImage={edmontonImage}
        cityName="Edmonton"
        cityLink="https://www.edmonton.ca/"
      />
      <CityFacts
        facts="Edmonton is kind of dead sometimes. They have a huge mall though, with a waterpark inside. It's called West Edmonton Mall. Pretty cool but it's closed. Edmonton kind of looks like Calgary too. Oh, it's also the capital of Alberta, can't forget that."
      />
    </View>
  );
};

export default Edmonton;