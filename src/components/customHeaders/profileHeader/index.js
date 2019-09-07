import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import Header from '../../header';
import styles from './styles';

const ProfileHeader = ({ navigation }) => (
  <Header
    navigation={navigation}
    leftButton={
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require('../../../assets/arrow.png')}
          style={styles.backIconStyle}
          resizeMode="cover"
        />
      </TouchableOpacity>
    }
    rightButton={
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.logoutButtonStyle}>SAVE</Text>
      </TouchableOpacity>
    }
    title="PROFILE"
  />
);
export default ProfileHeader;
