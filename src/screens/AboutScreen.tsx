import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> This is AboutScreen</Text>
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'black',
        fontWeight:'bold'
    }
})