import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, Text, View, Button, Pressable, Modal,TextInput,ScrollView,Alert} from 'react-native'
import DatePicker from 'react-native-date-picker'
const RegistrarHoras = ({modalRegVisible,setModalRegVisible,newDate,setNewDate}) => {
  const [date, setDate] = useState(new Date());
  const [user,setUser]=useState('')
  const [email,setEmail]=useState('')

  const Validacion=()=>{
    if([user,email,date].includes('')){
      Alert.alert("Todos los campos son requeridos")
    }
    const RegHoras ={
      id: Date.now(),
      user,
      email,
      date
    }
    setNewDate([...newDate,RegHoras])
    setModalRegVisible(!modalRegVisible)
    Alert.alert("Registro Exitoso")
    setUser('')
    setEmail('')
    setDate(new Date())

  }

  return (

      <Modal
        animationType='slide'
        visible={modalRegVisible}
      >
          <SafeAreaView style={styles.contenido}>
            <ScrollView>
              <Text style={styles.titulo}>Registro{''}
                <Text style={styles.tituloBold}>{''} Horas </Text> 
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
            <View style={styles.contenido}>
              
              <View style={styles.dateconteiner}>
                <DatePicker 
                    date={date} 
                    onDateChange={setDate} 
                />
              </View>
            </View>
            <Pressable
                style={styles.btnNuevaCita}
                onPress={Validacion}
                
              >
                <Text
                  style={styles.btnTextoNuevaCita}
                >
                  SAVE 
                </Text>
              </Pressable>  
            <Pressable
                style={styles.btnNuevaCita}
                onPress={()=>setModalRegVisible(false)}
                
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
    flex: 1,
    backgroundColor: '#6D28D9'

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
  dateconteiner:{
    margin:38,
    backgroundColor:'#000000',
  },
  btnNuevaCita : {
    backgroundColor: '#FFF',
    padding : 15,
    marginTop: 30,
    marginHorizontal : 20,
    borderRadius: 10

  },
  btnTextoNuevaCita : {
    textAlign : 'center',
    color : '#6D28D9',
    fontSize :15,
    fontWeight: '900',
    textTransform : 'uppercase',
  },
  input:{
    backgroundColor:'#fff',
    color:'#000000',
    padding: 15,
    borderRadius:10,
    marginBottom:15
  },
})



export default RegistrarHoras