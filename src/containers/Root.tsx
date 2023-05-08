import * as React from 'react';
import { ReactElement, useContext } from 'react';
import RN, { View } from 'react-native';
import { SafeAreaInsetsContext, SafeAreaProvider } from 'react-native-safe-area-context';
import { Dialog, IConfigDialog, IConfigToast, Toast } from './';
import { Color, IColors } from '../service';
import { StyleSheet } from 'react-native';

type IProps = {
  dialogConfig?: Pick<IConfigDialog, 'closeOnOverlayTap' | 'autoClose'>;
  toastConfig?: Pick<IConfigToast, 'autoClose' | 'titleStyle' | 'textBodyStyle'>;
  theme?: 'light' | 'dark';
  colors?: [IColors, IColors] /** ['light_colors' , 'dark_colors'] */;
  children: ReactElement | ReactElement[];
}; 

export const Root: React.FunctionComponent<IProps> = ({ theme, colors, children, dialogConfig, toastConfig }) => {
  const colorScheme = RN.useColorScheme?.();
  const safeAreaInsetsContext = useContext(SafeAreaInsetsContext);
  Color.colorsCustom = colors;

  const isDark = (theme ?? colorScheme) === 'dark';

  if (safeAreaInsetsContext === null) {
    return (
      <SafeAreaProvider>
        <View style={styles.content}>
          <React.Fragment>
            <Dialog ref={Dialog.instance} isDark={false} config={dialogConfig} />
            <Toast ref={Toast.instance} isDark={false} config={toastConfig} />
            {children}
          </React.Fragment>
        </View>
      </SafeAreaProvider>
    );
  }

  return (
    <View style={styles.content}>
      <React.Fragment>
        <Dialog ref={Dialog.instance} isDark={false} config={dialogConfig} />
        <Toast ref={Toast.instance} isDark={false} config={toastConfig} />
        {children}
      </React.Fragment>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});
