import React, { useState, useRef } from 'react';
import { View } from 'react-native';
import CarouselCardItem from './CarouselCardItem';
import data from '../data/startingData';

// Carousel CARDS COMPONENT

const CarouselCards = () => {

  return (
    <View>
<CarouselCardItem item={data}/>
    </View>
  );
};

export default CarouselCards;
