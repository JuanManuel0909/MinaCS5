import React, { useState } from 'react';

import { SafeAreaView, StyleSheet, Text, View, Button, Pressable, Modal,TextInput,ScrollView,Alert} from 'react-native';
import Formulario from './src/componets/Formulario'
import Registro from './src/componets/Registro';
const App=()=> {

  const[modalVisible, setModalVisible] = useState (false)
  const[modalRVsisible,setModalRVisible] = useState(false)
  const[usuario,setUsuario]= useState('')
  const[contraseña,setContraseña]= useState('')
  

  const Validacion=()=> {
    if(usuario && contraseña) {
      if (usuario && contraseña){
        setModalVisible(true)
        setUsuario('')
        setContraseña('')
      }else{
        Alert.alert('Invalid contraseña')
      }
    }
    else{
      Alert.alert('Faltan Campos por llenar')
    }

  }
  const Validacion2=()=> {
    setModalRVisible(true)
  }
  return (
   <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administrador de horas {''}
        <Text style={styles.tituloBold}>
          Mina
        </Text>
      </Text>
      <View style={styles.campo}>
            <Text style={styles.label}>Usuario</Text>
            <TextInput
              style={styles.input}
              placeholder='Usuario'
              placeholderTextColor={'#666'}
              value={usuario}
              onChangeText={(usuario)=>setUsuario(usuario)} 
            /> 
      </View>
      <View style={styles.campo}>
            <Text style={styles.label}>Contraseña</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              placeholder='Contraseña'
              placeholderTextColor={'#666'}
              value={contraseña}
              onChangeText={(contraseña)=>setContraseña(contraseña)} 
            /> 
      </View>

      <Pressable
        style={styles.btnNuevaCita}
        onPress={Validacion}
      >
        <Text
          style={styles.btnTextoNuevaCita}
        >
          Iniciar Sesion
        </Text>
      </Pressable>

      <Pressable
        style={styles.btnNuevaCita}
        onPress={Validacion2}
      >
        <Text
          style={styles.btnTextoNuevaCita}
        >
          Registrarse
        </Text>
      </Pressable>

      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <Registro
        modalRVsisible={modalRVsisible}
        setModalRVisible={setModalRVisible}
      />
      
     
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3F4F6',
   
  },
  titulo: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
  },
  tituloBold:{
    fontWeight: '900',
    color: '#6D28D9',
  },
  btnNuevaCita : {
    backgroundColor: '#6D28D9',
    padding : 15,
    marginTop: 30,
    marginHorizontal : 20,
    borderRadius: 10

  },
  btnTextoNuevaCita : {
    textAlign : 'center',
    color : '#FFF',
    fontSize :15,
    fontWeight: '900',
    textTransform : 'uppercase',
  },
  campo:{
    marginTop: 10,
    marginHorizontal:30,
  
  },
  label: {
    color:'#6D28D9',
    marginBottom:10,
    marginTop: 15,
    fontSize :20,
    fontWeight:'600'
  },
  input:{
    backgroundColor:'#fff',
    padding: 15,
    borderRadius:10,
    marginBottom:15,
    color:'#000000',
  },
});

export default App;