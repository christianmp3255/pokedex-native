/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>Hello World</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginVertical: 10,
    marginHorizontal: 10,
    fontFamily: 'Montserrat-Regular',
  },
});

export default App;
