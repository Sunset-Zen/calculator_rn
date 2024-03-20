import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NumberPad = ({children, style}) => {
    // Attribute(s) || Hook(s)
    // Function(s)
    // JSX
  return (
    <View style={[style, styles.numpad]}>
        <Text style={styles.number}>{children}</Text>
    </View>
  )
}

export default NumberPad

const styles = StyleSheet.create({
    numpad: {
        borderRadius: 15,
        borderWidth: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20, 
        backgroundColor: "#131313",
        borderColor: "#222222",
        width: 70,
        height: 70
    }, 
    number: {
        fontWeight: "bold",
        fontSize: 22,
        color:"#444444"
    }
})