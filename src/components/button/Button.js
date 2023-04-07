import React from "react";
import { View,Text ,TouchableOpacity} from "react-native";
import styles  from './Button.style'
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
export default function Button({iconName,buttonText,onPress}){
  return(
    <TouchableOpacity style = {styles.container} onPress = {onPress}>
    
     <Icon  style = {styles.icon}name ={iconName} color='white' size ={20}/>
   
      <Text style ={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  )
}