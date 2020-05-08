import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calculo from './src/Components/Calculo'

export default function App() { //componente padrão
  return (
    <View style={styles.container}>
      <Calculo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
