import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.login}>Login</Text>
      <View style={styles.emailInput}>
       <MaterialCommunityIcons name="email-check" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder='Digite seu email'
          onChangeText={setEmail}
        />
      </View>
      
      <View style={styles.senhaInput}>
       <MaterialIcons name="vpn-key" size={24} color="black" />
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          onChangeText={setSenha}
          placeholder='Digite sua senha'
        />
      </View>

      <View style={styles.button}>
        <Button title='ENTRAR'  onPress={() => Alert.alert('Login efetuado com sucesso')} color='#000' />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  senhaInput: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    width: 350,
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  emailInput: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    width: 350,
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  input: {
    flex: 1,
    padding: 4,
    color: '#fff'
  },
  button: {
    width: 350,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
  },
  login: {
    fontSize: 50,
    color: '#fff',
    marginBottom: 30,
  },
});