import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, TouchableHighlightBase, TouchableHighlight, Image } from 'react-native'

export default function Login() {
    return (
        <View style={styles.container} >
            <View style={styles.imgContainer} >
                <Image style={styles.img} source={ require('../assets/icon.png') } />
            </View>
            <TextInput
                style={styles.input}
                placeholder="useless placeholder"
            />
            <TextInput
                style={styles.input}
                placeholder="useless placeholder"
            />
            <TouchableHighlight style={styles.btn} >
                <Text style={styles.btnText} >Login</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={styles.link} >Forgotten password ?</Text>
            </TouchableHighlight>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        padding: 40,
    },
    btn: {
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        alignSelf:"stretch",
        padding: 10,
        borderRadius: 5,
        elevation: 3,

    },
    btnText:{
        color:"white"
    },  
    link:{
        margin:15,
        color:"black",
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    input: {
        backgroundColor:"white",
        padding:8,
        borderRadius:5,
        alignSelf:"stretch",
        marginBottom:10,
        elevation: 3,
    },
    imgContainer:{
        position:"relative",
        width:"100%",
        height:100,
        justifyContent:"center",
        alignItems:"center",
        marginBottom:40
    },
    img:{
        flex:1,
        maxWidth:"80%"
    }
})