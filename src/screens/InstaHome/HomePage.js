import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InstaHomeFirstPage from '../../components/InstaHomeFirstPage';
import InstaHomeSecdPage from '../../components/InstaHomeSecdPage';
import InstaHomeThirdLikesPage from '../../components/InstaHomeThirdLikesPage';

const HomePage = () => {
  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <InstaHomeFirstPage />
      <ScrollView>
        <InstaHomeSecdPage />
        <InstaHomeThirdLikesPage />
        <InstaHomeSecdPage />
        <InstaHomeThirdLikesPage />
        <InstaHomeSecdPage />
        <InstaHomeThirdLikesPage />
        <InstaHomeSecdPage />
        <InstaHomeThirdLikesPage />
        <InstaHomeSecdPage />
        <InstaHomeThirdLikesPage />
        <InstaHomeSecdPage />
        <InstaHomeThirdLikesPage />
        <InstaHomeSecdPage />
        <InstaHomeThirdLikesPage />
        <InstaHomeSecdPage />
        <InstaHomeThirdLikesPage />
        <InstaHomeSecdPage />
        <InstaHomeThirdLikesPage />
        <InstaHomeSecdPage />
        <InstaHomeThirdLikesPage />
      </ScrollView>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
