import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'


//
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../../App'

type HomeProps = NativeStackScreenProps<RootStackParamList,'Home'>

const HomeScreen = ({navigation}:HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
       title='Go to About Screen'
       onPress={()=>navigation.navigate('About',{userName: 'Mr. x', userId:'11'})}
       />

       <Text>Hello</Text>


    </View>
  )
}

export default HomeScreen

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