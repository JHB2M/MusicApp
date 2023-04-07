import React from "react";
import { TextInput,View,Text } from "react-native";
import styles from './Input.style'
export default function Input({placeholderText,isSecure,value,onType}){
  return(
    <View style ={styles.container}>
      <TextInput style = { styles.input} placeholder ={placeholderText} secureTextEntry ={isSecure} value = {value} onChangeText = {onType}/>
    </View>
  )
}
