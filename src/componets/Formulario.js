import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, Text, View, Button, Pressable, Modal,TextInput,ScrollView} from 'react-native'
import RegistrarHoras from './RegistrarHoras'
import ConsultarHoras from './ConsultarHoras'
import Novedades from './Novedades'
const Formulario = ({modalVisible,setModalVisible}) => {
  const[modalRegVisible, setModalRegVisible] = useState (false) 
  const[modalConVisable, setModalConVisible] = useState (false)
  const[modalNVisable, setModalNVisible] = useState (false)
  return (

      <SafeAreaView style={styles.contenido}>
        <Modal 
            animationType='slide'
            visible={modalVisible}      
        >
          
            <ScrollView>
              <Text style={styles.titulo}> Registro de Horas       {''}
                  <Text style={styles.tituloBold}> Mina </Text> 
              </Text>
              <Pressable
                style={styles.btnNuevaCita}
                onPress={()=>setModalRegVisible(true)}
              >
                <Text
                  style={styles.btnTextoNuevaCita}
                >
                  Ingresar Horas
                </Text>
              </Pressable>  
              <Pressable
                style={styles.btnNuevaCita}
                onPress={()=>setModalConVisible(true)}
                
              >
                <Text
                  style={styles.btnTextoNuevaCita}
                >
                  Consultar Horas
                </Text>
              </Pressable>  

              <Pressable
                style={styles.btnNuevaCita}
                onPress={()=>setModalNVisible(true)}
                
              >
                <Text
                  style={styles.btnTextoNuevaCita}
                >
                  Novedades
                </Text>
              </Pressable>  

              <Pressable
                style={styles.btnNuevaCita}
                onPress={()=>setModalVisible(false)}
                
              >
                <Text
                  style={styles.btnTextoNuevaCita}
                >
                  Regresar 
                </Text>
              </Pressable>  
            </ScrollView> 
        
        </Modal>
        <RegistrarHoras
            modalRegVisible={modalRegVisible}
            setModalRegVisible={setModalRegVisible}
        />
        <ConsultarHoras
          modalConVisable={modalConVisable}
          setModalConVisible={setModalConVisible}
        />
        <Novedades
          modalNVisable={modalNVisable}
          setModalNVisible={setModalNVisible}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#f3F4F6',
    flex:1,
    
  },
  titulo: {
    fontSize:40,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color:'#374151',
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },
  campo:{
    marginTop: 10,
    marginHorizontal:30,
  
  },
  label: {
    color:'#FFF',
    marginBottom:10,
    marginTop: 15,
    fontSize :20,
    fontWeight:'600'
  },
  input:{
    backgroundColor:'#fff',
    padding: 15,
    borderRadius:10,
    marginBottom:15
  },
  sintomasInput: {
    height:100
  },
  btnCerrar : {
    backgroundColor: '#6D28D9',
    padding : 15,
    marginTop: 30,
    marginHorizontal : 20,
    borderRadius: 10

  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
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
  }
})

export default Formulario