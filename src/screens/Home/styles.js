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
  homeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 10,
  },
  itemContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: 10,
    paddingTop: 30,
    paddingBottom: 20,
    borderRadius: 8,
    ...CARD_SHADOW,
  },
  itemStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
    // margin: 10,
  },
  titleStyle: {
    color: '#4D4D4D',
    fontFamily: 'Roboto',
    marginTop: 15,
    fontSize: 24,
  },
};
