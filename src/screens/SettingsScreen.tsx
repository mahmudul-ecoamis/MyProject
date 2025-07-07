import { StyleSheet, Text } from 'react-native'
import React from 'react'
import SwipeBackWrapper from '../components/SwipeBackWrapper'


const SettingsScreen = () => {
  return (
    <SwipeBackWrapper>
      <Text style={styles.text}> This is SettingsScreen</Text>
    </SwipeBackWrapper>
  )
}

export default SettingsScreen

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