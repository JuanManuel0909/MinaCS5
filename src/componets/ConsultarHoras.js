import React, { useState } from 'react'
import {SafeAreaView, StyleSheet, Text, View, Button, Pressable, Modal,TextInput,ScrollView,FlatList} from 'react-native'
import NewDate from './NewDate'
const ConsultarHoras = ({modalConVisable,setModalConVisible,newDate}) => {
    
  return (
    <SafeAreaView>
        <Modal
            animationType='slide'
            visible={modalConVisable}
        > 
            <View style={styles.contenido}>
                <Text style={styles.titulo}>Consultar{''}
                <Text style={styles.tituloBold}>{''} Horas </Text> 
              </Text>

              <View>
                {newDate.length===0 ?
                  <Text>No hay nada para consultar</Text>:
                  <FlatList
                      data={newDate}
                      keyExtractor={(item) =>item.id}
                      renderItem={({item})=>{
                          return(
                              <NewDate
                                  item ={item}
                              />
                          )
                      }}
                  />
                  }
              </View>

              <Pressable
                style={styles.btnNuevaCita}
                onPress={()=>setModalConVisible(!modalConVisable)}
                
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
  

export default ConsultarHoras