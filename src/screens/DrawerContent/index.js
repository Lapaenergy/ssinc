import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const listMenuItems = [
  {
    id: 1,
    route: 'Profile',
    title: 'Profile',
    icon: require('../../assets/profile.png'),
  },
  {
    id: 2,
    route: 'Shopping',
    title: 'Shopping',
    icon: require('../../assets/cart.png'),
  },
  {
    id: 3,
    route: 'Gallery',
    title: 'Gallery',
    icon: require('../../assets/gallery.png'),
  },
];

class DrawerContent extends PureComponent {
  renderMenuItem = () => {
    const drawerMenu = listMenuItems.map((item) => {
      let normalizeSize = this.correctionIconSize(item.title);
      return (
        <TouchableOpacity
          key={item.id}
          onPress={() => this.routeFromDrawer(item.route)}
          style={styles.wrapperDrawerMenuItem}
        >
          <View style={styles.iconContainer}>
            <Image
              style={{ ...styles.iconDrawerMenuItem, ...normalizeSize }}
              source={item.icon}
            />
          </View>
          <Text style={styles.titleDrawerMenuItem}>{item.title}</Text>
        </TouchableOpacity>
      );
    });

    return drawerMenu;
  };
  correctionIconSize = (iconName) => {
    switch (iconName) {
      case 'Profile':
        return {
          width: 16,
          height: 16,
        };
      case 'Shopping':
        return {
          width: 18,
          height: 18,
        };
      case 'Gallery':
        return {
          width: 18,
          height: 16,
        };
      default:
        return {
          width: 20,
          height: 20,
        };
    }
  };
  closeDrawer = () => this.props.navigation.closeDrawer();
  routeFromDrawer = (routeTo) => this.props.navigation.navigate(routeTo);

  render() {
    console.log(this.props.navigation);

    return (
      <View style={styles.drawerContainer}>
        <TouchableOpacity
          style={styles.closeButtonStyle}
          onPress={this.closeDrawer}
          hitSlop={{ top: 20, right: 30, bottom: 20, left: 20 }}
        >
          <Image
            source={require('../../assets/close.png')}
            style={styles.closeIconStyle}
          />
        </TouchableOpacity>
        <Text style={styles.drawerTitle}>LIST OF TASKS</Text>
        {this.renderMenuItem()}
      </View>
    );
  }
}

export default DrawerContent;
