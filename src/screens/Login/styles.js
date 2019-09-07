import { Platform } from 'react-native';
const CARD_SHADOW = Platform.select({
  android: {
    elevation: 7,
  },
  ios: {
    shadowColor: 'rgba(0, 172, 234, 0.3)',
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
  },
});
export default {
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  titleStyle: {
    fontSize: 76,
    color: '#696B73',
    // flex: 1,
    alignItems: 'center',
    paddingBottom: 50,
    fontFamily: 'Catamaran-Light',
    // paddingTop: 131,
  },
  inputContainer: {
    flex: 1,
    width: '100%',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  bgImageStyle: {
    width: '75%',
    height: '45%',
    position: 'absolute',
    zIndex: -1,
  },
  mail: {
    width: 20,
    height: 20,
  },
  pass: {
    width: 17,
    height: 17,
  },
  confirmButtonWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  confirmButton: {
    backgroundColor: '#BDBDBD',
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    ...CARD_SHADOW,
  },
  confirmTextStyle: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
};
