import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import Header from '../../header';
import styles from './styles';

const ProfileHeader = ({ navigation, title }) => (
  <Header
    navigation={navigation}
    leftButton={
      <TouchableOpacity
        hitSlop={{ top: 10, right: 30, bottom: 10, left: 10 }}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require('../../../assets/arrow.png')}
          style={styles.backIconStyle}
          resizeMode="cover"
        />
      </TouchableOpacity>
    }
    rightButton={<View style={styles.emptyBlock} />}
    title={title}
  />
);
export default ProfileHeader;
