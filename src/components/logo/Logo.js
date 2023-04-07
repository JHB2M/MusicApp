import React from "react";
import styles from './Logo.style'
import Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import {View,Text} from 'react-native'
export default function Logo({iconColor,isBlack,isScreamBlack}){
  const classes = styles({isBlack,isScreamBlack})
  return(
    <View style ={classes.header}>
      <Icon name = 'guitar-electric' color ={iconColor} size={140}/>
        <View style ={classes.textArea}>
          <Text style={classes.textMusic}>Music</Text>
          <Text style = {classes.textGru}> Gru</Text>
        </View>
        <Text style={classes.scream}>Scream It Louder</Text>
        
      </View>
  )
}