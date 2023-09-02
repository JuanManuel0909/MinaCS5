import React from 'react'
import {Text,View, StyleSheet} from 'react-native'

const NewDate=({item})=>{
    const {user,email, date} = item
    console.log(date)
    const FormatDate = date=>{
        const newFecha = new Date(date)
        const opciones ={
            weekday:'long',
            year:'numeric',
            month:'long',
            day:'numeric',
            hour:'numeric',
            minute: 'numeric',
            hourCycle:'h12'
        }
        return newFecha.toLocaleDateString('es-ES', opciones)
    }
    return(
        <View style={styles.Contenedor}>
            <Text style={styles.Label}>USUARIO:</Text>
            <Text style={styles.Text}>{user}</Text>
            <Text style={styles.Label}>CORREO:</Text>
            <Text style={styles.Text}>{email}</Text>
            <Text style={styles.Label}>FECHA:</Text>
            <Text style={styles.Fecha}>{FormatDate(date)}</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    Contenedor:{
        backgroundColor:"#fff",
        padding:20,
    },
    Label:{
        color:'#000000',
        textTransform: 'uppercase',
        fontWeight:'700'
    },
    Fecha:{
        color:'#000000'
    },
    Text:{
        color:'#6d28d9',
        fontSize:20,
        fontWeight:'700',
        marginBottom:10,
    }
})

export default NewDate