import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const OperandPad = ({children, style}) => {
    // Attribute(s) || Hook(s)
    // Function(s)
    // JSX
  return (
    <View style={[styles.numpad, style]}>
      <Text style={styles.number}>{children}</Text>
    </View>
  )
}

export default OperandPad

const styles = StyleSheet.create({
    numpad: {
        borderRadius: 15,
        borderWidth: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20, 
        backgroundColor: "#1e1111",
        backgroundColor: "#1e1e1e",
        borderColor: "#333333",
        width: 70,
        height: 70
    }, 
    number: {
        fontWeight: "bold",
        fontSize: 22,
        color: "#555555"
    }
})