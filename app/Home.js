import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function Home() {
    return (
        <View style={styles.container} >
            <View style={styles.view} ></View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
    },
    view: {
        height:"200",
        width:"200"
    }
})