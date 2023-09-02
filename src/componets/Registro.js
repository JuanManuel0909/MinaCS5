import React,{useState} from 'react'
import { SafeAreaView, StyleSheet, Text, View, Button, Pressable, Modal,TextInput,ScrollView,Alert} from 'react-native'


const Registro = ({modalRVsisible,setModalRVisible}) => {
    const[user,setUser]= useState('')
    const[pasword,setPasword]= useState('')
    const[pasword2,setPasword2]= useState('')
    const[email,setEmail]= useState('')

    const Validacion=()=> {


        if(user && pasword && pasword2 && email){
          if(pasword==pasword2){
            Alert.alert('Registro Exitoso')
            setModalRVisible(false)
            setUser('')
            setPasword('')
            setPasword2('')
            setEmail('')
          }else{
            Alert.alert('Las contraseñas no conciden')
          }
            
        }else{
            Alert.alert('Faltan campos por llenar')
        }
    }

    return (

    <Modal 
      animationType='slide'
      visible={modalRVsisible}      
    >
          <SafeAreaView style={styles.contenido}>
            <ScrollView>
                <Text style={styles.titulo}>Registro{''}
                    <Text style={styles.tituloBold}>{''} Usuarios </Text> 
                </Text>

                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre de usuario</Text>
                    <TextInput
                      style={styles.input}
                      placeholder='Nombre Usuario'
                      placeholderTextColor={'#666'}
                      value={user}
                      onChangeText={setUser}
                    /> 
                </View>    
                <View style={styles.campo}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                       
                      style={styles.input}
                      placeholder='Contraseña'
                      placeholderTextColor={'#666'}
                      value={email}
                      onChangeText={setEmail}
                    /> 
                </View> 
                <View style={styles.campo}>
                    <Text style={styles.label}>Contraseña</Text>
                    <TextInput
                      secureTextEntry={true}
                      style={styles.input}
                      placeholder='Contraseña'
                      placeholderTextColor={'#666'}
                      value={pasword}
                      onChangeText={setPasword}
                    /> 
                </View>  
                <View style={styles.campo}>
                    <Text style={styles.label}>Confimar Contraseña</Text>
                    <TextInput
                      secureTextEntry={true}
                      style={styles.input}
                      placeholder='Contraseña'
                      placeholderTextColor={'#666'}
                      value={pasword2}
                      onChangeText={setPasword2}
                    /> 
                </View> 
               
                <Pressable
                    style={styles.btnNuevaCita}
                    onPress={Validacion}
                >
                    <Text
                      style={styles.btnTextoNuevaCita}
                    >
                        Registrarse 
                    </Text>
                </Pressable>
                <Pressable
                    style={styles.btnNuevaCita}
                    onPress={()=>setModalRVisible(false)}
                >
                    <Text
                      style={styles.btnTextoNuevaCita}
                    >
                      Regresar
                    </Text>
                </Pressable>
            </ScrollView> 
          </SafeAreaView>
    </Modal>
  )
}
const styles = StyleSheet.create({
    contenido: {
      backgroundColor: '#6D28D9',
      flex:1,
    },
    titulo: {
      fontSize:30,
      fontWeight: '600',
      textAlign: 'center',
      marginTop: 30,
      color:'#FFF',
    },
    tituloBold: {
      fontWeight: '900',
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
      color:'#000000',
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
  
    },btnNuevaCita : {
        backgroundColor: '#FFF',
        padding : 15,
        marginTop: 30,
        marginHorizontal : 20,
        borderRadius: 10,
    
      },
      btnTextoNuevaCita : {
        textAlign : 'center',
        color : '#6D28D9',
        fontSize :15,
        fontWeight: '900',
        textTransform : 'uppercase',
      },
    
  })


export default Registro