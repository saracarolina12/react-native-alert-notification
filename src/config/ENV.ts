import { Dimensions } from 'react-native';

const WINDOWS = Dimensions.get('window');
const WIDTH = WINDOWS.width;
const HEIGHT = WINDOWS.height;

enum ACTION {
  OPEN,
  CLOSE,
}

enum ALERT_TYPE {
  SUCCESS = 'SUCCESS',
  DANGER = 'DANGER',
  WARNING = 'WARNING',
}

enum TOAST_POSITION {
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
}

const ENV = {
  AUTO_CLOSE: 5000,
  WINDOWS: {
    WIDTH,
    HEIGHT,
  },
  COLORS: {
    label: {
      ios: 'label',
      android: ['@android:color/primary_text_light', '@android:color/primary_text_light'],
      default: ['rgb(229,229,231)', 'rgb(229,229,231)'],
    },
    card: {
      ios: 'systemGray6',
      android: ['@android:color/background_light', '@android:color/background_light'],
      default: ['rgb(216,216,220)', 'rgb(216,216,220)'],
    },
    overlay: {
      ios: 'black',
      android: ['@android:color/background_light', '@android:color/background_light'],
      default: ['#ffffff', '#ffffff'],
    },
    success: {
      ios: 'systemGreen',
      android: ['@android:color/holo_purple', '@android:color/holo_purple'],
      default: ['rgb(108, 37, 87)', 'rgb(108, 37, 87)'],
    },
    danger: {
      ios: 'systemRed',
      android: ['@android:color/holo_red_light', '@android:color/holo_red_light'],
      default: ['rgb(255,59,48)', 'rgb(255,59,48)'],
    },
    warning: {
      ios: 'systemOrange',
      android: ['@android:color/holo_orange_light', '@android:color/holo_orange_light'],
      default: ['rgb(255,149,0)', 'rgb(255,149,0)'],
    },
  },
};

export { ENV, ALERT_TYPE, TOAST_POSITION, ACTION };
