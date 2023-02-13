import React, {useEffect, useState} from 'react';
import {Text, Dimensions, StyleSheet, View} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import Videos from '../../Videos';
import SingleReel from './SingleReel';

const ReelsComponent = () => {
  const [video, SetVedio] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    SetVedio(Videos);
  }, []);
  const HashChangeIndexValue = ({index}) => {
    setCurrentIndex(index);
  };
  return (
    <SwiperFlatList
      data={video}
      onChangeIndex={HashChangeIndexValue}
      currentIndex={currentIndex}
      vertical={true}
      keyExtractor={item => `${item.id}`}
      renderItem={({item, index}) => (
        <SingleReel item={item} index={index} currentIndex={currentIndex} />
      )}
    />
  );
};

export default ReelsComponent;
const styles = StyleSheet.create({});
