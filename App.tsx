import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import AuthScreen from './src/screens/AuthScreen';
import theme from './src/theme';
import Toast from 'react-native-toast-message';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container}>

      <AuthScreen />

      <Toast
        position='top'
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.white
  }
});

export default App;
