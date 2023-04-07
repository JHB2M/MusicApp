import React from "react";
import {View,Text, TouchableOpacity} from 'react-native'
import  Icon  from "react-native-vector-icons/AntDesign";
import styles from './Header.style'
export  default function Header({header,iconName,onPressSaved,onPressSettings}){
  return(
     <View style = {styles.container}>
      <View style = {{width:30}}></View>
      <Text style = {styles.header}>{header}</Text>
      <View style = {styles.iconContainer}>
       <TouchableOpacity onPress={onPressSaved}>
       <Icon   name = {iconName} size={30} color ='black'/>
       </TouchableOpacity>
       <TouchableOpacity onPress={onPressSettings}>

      <Icon  style = {styles.icon}name = 'setting' size={30} color ='black'/>
       </TouchableOpacity>
      </View>
     </View>
  )
}