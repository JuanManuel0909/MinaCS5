import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Button, Pressable, Modal,TextInput,ScrollView} from 'react-native'

const Novedades = ({modalNVisable,setModalNVisible}) => {
  return (
    <SafeAreaView
        
    >
        <Modal
            animationType='slide'
            visible={modalNVisable}
        >
           <View style={styles.contenido}>
                <Text style={styles.titulo}>Novedades{''}
              </Text>
              <Pressable
                style={styles.btnNuevaCita}
                onPress={()=>setModalNVisible(false)}
                
              >
                <Text
                  style={styles.btnTextoNuevaCita}
                >
                  Regresar 
                </Text>
              </Pressable>  
            </View>

        </Modal>
  </SafeAreaView>
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
  })
  

export default Novedades