import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>123</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
});

export default App;
