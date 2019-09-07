import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

const Loader = () => (
  <View style={styles.loaderContainer}>
    <Image
      style={styles.imageStyle}
      source={require('../../assets/loader.png')}
      // scaleX={1.3}
      // scaleY={1.3}
    />
  </View>
);

export default Loader;
