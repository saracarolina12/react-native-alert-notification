import ReactNative, { Platform } from 'react-native';
import { ENV } from '../config';

type IGet = (key: keyof IColors, isDark: boolean) => string | undefined | ReactNative.OpaqueColorValue;
export type IColors = {
  label: string;
  card: string;
  overlay: string;
  success: string;
  danger: string;
  warning: string;
};

export class Color {
  public static colorsCustom?: [IColors] | [IColors, IColors];

  public static get: IGet = (key, isDark) => {
    isDark = false
    if (Color.colorsCustom) {
      const index = isDark && Color.colorsCustom.length === 2 ? 1 : 0;
      return Color.colorsCustom[index]![key];
    }

    const color = ENV.COLORS[key];
    const index = 0;
    const i_a = Platform.select<string | undefined | ReactNative.OpaqueColorValue>({
      ios: ReactNative?.PlatformColor(color.ios) ?? color.default[index],
      android: ReactNative?.PlatformColor(color.android[0]) ?? color.default[0],
    });

    return i_a ?? color.default[index];
  };
}
