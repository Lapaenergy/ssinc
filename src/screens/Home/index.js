import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const functionalBlocksContent = [
  {
    id: '1',
    title: 'Profile',
    icon: require('../../assets/profile.png'),
    routeTo: 'Profile',
  },
  {
    id: '2',
    title: 'Shopping',
    icon: require('../../assets/cart.png'),
    routeTo: 'Shopping',
  },
  {
    id: '3',
    title: 'Gallery',
    icon: require('../../assets/gallery.png'),
    routeTo: 'Gallery',
  },
];
class Home extends PureComponent {
  renderHomeItem = () => {
    const contentBlocks = functionalBlocksContent.map((item) => {
      let normalizeSize = this.correctionIconSize(item.title);
      return (
        <View style={styles.itemContainerStyle} key={item.id}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate(item.routeTo)}
            style={styles.itemStyle}
          >
            <Image source={item.icon} style={{ ...normalizeSize }} />
            <Text style={styles.titleStyle}>{item.title}</Text>
          </TouchableOpacity>
        </View>
      );
    });

    return contentBlocks;
  };

  correctionIconSize = (iconName) => {
    switch (iconName) {
      case 'Profile':
        return {
          width: 56,
          height: 56,
        };
      case 'Shopping':
        return {
          width: 58,
          height: 58,
        };
      case 'Gallery':
        return {
          width: 58,
          height: 50,
        };
      default:
        return {
          width: 80,
          height: 80,
        };
    }
  };

  render() {
    return <View style={styles.homeContainer}>{this.renderHomeItem()}</View>;
  }
}

export default Home;
