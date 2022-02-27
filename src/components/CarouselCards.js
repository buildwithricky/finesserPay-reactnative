import React, { useState, useRef } from 'react';
import { View } from 'react-native';
import Carousel, {
  Pagination,
} from 'react-native-snap-carousel';
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from './CarouselCardItem';
import data from '../data/startingData';

// Carousel CARDS COMPONENT

const CarouselCards = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  return (
    <View>
      <Carousel
        layout="default"
        enableMomentum={true}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor:
            ' rgba(255, 255, 255, 1)',
        }}
        containerStyle={{
          position: 'absolute',
          top: 390,
          left: 24,
          height: 10,
          width: 10,
        }}
        inactiveDotOpacity={0.3}
        inactiveDotScale={1}
        tappableDots={false}
      />
    </View>
  );
};

export default CarouselCards;
