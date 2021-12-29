import { Dimensions, Platform, StatusBar } from 'react-native';
import { scale } from 'react-native-size-matters';
import {getStatusBarHeight} from "react-native-iphone-x-helper";

const width = Dimensions.get('screen').width;
const height = Platform.OS === 'android' && Platform.Version > 26 ? Dimensions.get('screen').height - StatusBar.currentHeight : Dimensions.get('window').height;

const widthDesign = 375;
const heightDesign = 812 - getStatusBarHeight(); // 44

const widthScale = 350;
const heightScale = 680;

export const bottomTabHeight = 80;

export const getWidthScreen = () => width;
export const getHeightScreen = () => height;

export const getHeightByPercent = (percent) => {
  if (percent > 100) {
    return height;
  }
  if (percent < 0) {
    return 0;
  }
  return (percent * height) / 100;
};

export const getWidthByPercent = (percent) => {
  if (percent > 100) {
    return width;
  }
  if (percent < 0) {
    return 0;
  }
  return (percent * width) / 100;
};

export const scaleWidth = (number) => {
  return scale((number / widthDesign) * widthScale);
};

export const scaleHeight = (number) => {
  return scale((number / heightDesign) * heightScale);
};
