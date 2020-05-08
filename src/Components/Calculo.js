import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function Calculo() {

   const [valor, setValor] = useState(null);

   return (
      <View style={styles.container}>
         <Text style={styles.titulo}>Converter App</Text>
         <Text style={styles.texto}>Digite o valor em reais:</Text>
         <TextInput style={styles.input} onChangeText={(valor) => setValor(valor)} value={valor}></TextInput>
         {/*<Button style={styles.btn} title="Converter" onPress={calcular} />*/}
         <Text style={styles.textoTotal}>Total de centavos: {valor * 100} </Text>
         <Text style={styles.textoValorMoeda}>Moedas de 0,50: {Math.trunc(valor / 0.5)}</Text>
         <Text style={styles.textoValorMoeda}>Moedas de 0,25: {Math.trunc(valor / 0.25)}</Text>
         <Text style={styles.textoValorMoeda}>Moedas de 0,10: {Math.trunc(valor / 0.1)}</Text>
         <Text style={styles.textoValorMoeda}>Moedas de 0,05: {Math.trunc(valor / 0.05)}</Text>
      </View>

   )
};

const styles = StyleSheet.create({
   titulo: {
      paddingLeft: 100,
      fontSize: 35,
      fontWeight: 'bold',
      color: "#363636"

   },

   texto: {
      padding: 6,
      fontSize: 20,
      color: '#363636'
   },

   input: {
      margin: '0 auto',
      padding: 15,
      width: 400,
      height: 30,
      borderColor: 'gray',
      borderWidth: 1,
      fontSize: 20
   },

   textoTotal: {
      padding: 6,
      paddingLeft: 100,
      fontSize: 25,
      color: '#363636'
   },

   textoValorMoeda: {
      padding: 6,
      fontSize: 25,
      color: '#363636'
   },

   container: {
      color: "#CFCFCF"
   }
});
