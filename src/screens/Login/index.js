import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  ImageBackground,
  StatusBar,
} from 'react-native';
import styles from './styles';
import Loader from '../../components/Loader';
import InputForm from '../../components/InputForm';

class Login extends PureComponent {
  state = {
    enteredEmail: '',
    enteredPass: '',
    isValidateEmail: false,
    isValidatePassword: false,
    // hiddenSymbolsForPassword: '',
  };

  handleEnterEmail = (email) => {
    this.setState({
      enteredEmail: email,
    });
  };

  handleEnterPassword = (pass) => {
    this.setState({
      enteredPass: pass,
    });
  };

  changeBorderColor = (val, type) => {
    const { isValidatePassword, isValidateEmail } = this.state;
    if (isValidatePassword && type === 'pass') {
      return { borderBottomColor: '#F01A1A' };
    } else if (isValidateEmail && type === 'email') {
      return { borderBottomColor: '#F01A1A' };
    } else if (val) {
      return { borderBottomColor: '#197EC3' };
    }
    return { borderBottomColor: '#4D4D4D' };
  };

  changeMailIcon = (val) => {
    const { isValidateEmail } = this.state;
    if (isValidateEmail) {
      return require('../../assets/disMail.png');
    } else if (val) {
      return require('../../assets/mail.png');
    }
    return require('../../assets/email_gray.png');
  };

  changePassIcon = (val) => {
    const { isValidatePassword } = this.state;
    if (isValidatePassword) {
      return require('../../assets/disPass.png');
    } else if (val) {
      return require('../../assets/pass.png');
    }
    return require('../../assets/key_gray.png');
  };

  setButtonColor = () => {
    const {
      enteredEmail,
      enteredPass,
      isValidateEmail,
      isValidatePassword,
    } = this.state;
    if (
      !!enteredEmail &&
      !!enteredPass &&
      !isValidatePassword &&
      !isValidateEmail
    ) {
      return '#2CC4ED';
    }
    return '#BDBDBD';
  };

  isDisabledButton = () => {
    const { enteredEmail, enteredPass } = this.state;
    if (!enteredEmail && !enteredPass) {
      return true;
    }
    return false;
  };

  handleConfirm = () => {
    const { enteredEmail, enteredPass } = this.state;

    const validEmail = RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gim,
    );
    const isValidatePass = !(enteredPass.length > 7);

    this.setState(
      {
        isValidateEmail: !validEmail.test(enteredEmail),
        isValidatePassword: isValidatePass,
      },
      this.actionAfterConfirm,
    );
  };

  actionAfterConfirm = () => {
    const {
      enteredEmail,
      enteredPass,
      isValidatePassword,
      isValidateEmail,
    } = this.state;

    if (
      !!enteredEmail &&
      !!enteredPass &&
      !isValidatePassword &&
      !isValidateEmail
    ) {
      this.props.navigation.navigate('AppRoutes');
    } else {
      Alert.alert(
        'Wrong entered data',
        'Enter the correct personal data, please',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
        ],
        { cancelable: false },
      );
    }
  };

  render() {
    const {
      enteredEmail,
      enteredPass,
      isValidateEmail,
      isValidatePassword,
    } = this.state;
    return (
      <View style={styles.loginContainer}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <ImageBackground
          source={require('../../assets/bgLogo.png')}
          style={{
            width: '100%',
            height: '100%',
            flex: 1,
            // justifyContent: 'space-between',
            alignItems: 'center',
          }}
          imageStyle={{
            width: 300,
            height: 300,
            position: 'absolute',
            // alignSelf: 'center',
            top: '28%',
            left: 0,
            right: 0,
          }}
        >
          <Text style={styles.titleStyle}>Sign In</Text>
          {/* <Image
            source={require('../../assets/bgLogo.png')}
            style={styles.bgImageStyle}
            resizeMode={'cover'}
          /> */}
          <View style={styles.inputContainer}>
            <InputForm
              icon={
                <Image
                  source={this.changeMailIcon(enteredEmail)}
                  style={styles.mail}
                  resizeMode="cover"
                />
              }
              value={enteredEmail}
              placeholder="Email"
              onChange={this.handleEnterEmail}
              placeholderTextColor="#B6B6B6"
              keyboardType="email-address"
              caretHidden={false}
              borderStyle={this.changeBorderColor(enteredEmail, 'email')}
              errorMessage="Email address is not correct listed"
              isValidate={isValidateEmail}
            />
            <InputForm
              icon={
                <Image
                  source={this.changePassIcon(enteredPass)}
                  style={styles.pass}
                  resizeMode="cover"
                />
              }
              value={enteredPass}
              placeholder="Password"
              onChange={this.handleEnterPassword}
              placeholderTextColor="#B6B6B6"
              keyboardType="default"
              caretHidden={true}
              borderStyle={this.changeBorderColor(enteredPass, 'pass')}
              errorMessage="Password must be at least 8 characters long"
              isValidate={isValidatePassword}
            />
          </View>
          <View style={styles.confirmButtonWrapper}>
            <TouchableOpacity
              style={{
                ...styles.confirmButton,
                backgroundColor: this.setButtonColor(),
              }}
              onPress={this.handleConfirm}
            >
              <Text style={styles.confirmTextStyle}>CONFIRM</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        {/* <Loader /> */}
      </View>
    );
  }
}

export default Login;
