import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import Header from '../../header';
import styles from './styles';

const HomeHeader = ({ navigation }) => (
  <Header
    navigation={navigation}
    leftButton={
      <TouchableOpacity
        hitSlop={{ top: 10, right: 30, bottom: 10, left: 10 }}
        onPress={navigation.openDrawer}
      >
        <Image
          source={require('../../../assets/Menu.png')}
          style={styles.menuIconStyle}
          resizeMode="cover"
        />
      </TouchableOpacity>
    }
    rightButton={
      <TouchableOpacity onPress={() => navigation.navigate('AuthRoutes')}>
        <Text style={styles.logoutButtonStyle}>Logout</Text>
      </TouchableOpacity>
    }
    title="TEST TASKS"
  />
);
export default HomeHeader;
