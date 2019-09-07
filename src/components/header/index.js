import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from './styles';

const Header = ({ navigation, leftButton, rightButton, title }) => {
  console.log(navigation);
  return (
    <View style={styles.headerContainer}>
      <StatusBar backgroundColor="#197EC3" />
      {/* <TouchableOpacity
        onPress={()=> navigation.openDrawer()}
      >
        <Text>Open</Text>
      </TouchableOpacity> */}
      {leftButton}
      <Text
        style={{
          color: '#fff',
          fontSize: 30,
          fontFamily: 'Catamaran-Bold',
        }}
      >
        {title}
      </Text>
      {rightButton}
      {/* <TouchableOpacity
      onPress={rightButton}
      >
        <Text>Logout</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Header;
