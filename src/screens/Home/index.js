import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Home extends PureComponent {
  render() {
    // console.log(this.props);
    return (
      <View>
        <Text>Home Page</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}
        >
          <Text>Go to Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
