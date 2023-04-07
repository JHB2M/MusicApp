import React from "react";
import { View,Text ,Image, TouchableOpacity} from "react-native";
import styles from './UserAvatar.style'
export default function UserAvatar({name,email,onPressEdit}){
  
  return(
    <View style ={styles.container}>
        <View style = {styles.imageBody}>
          <Image style ={styles.image} source = {{uri:'https://lh3.googleusercontent.com/keep-bbsk/AJ5RgYAzbS7jVY3TyIujsRsuMMheopL-TRnLBYvXlg-5kqJNL-5rH-_JDTapUZg6Flh19GY10XxmkqM1N-x66bSIAngIbHQjYS9Kv0VmMrHD3K_Z8sao=s1489'}}/>
        </View>
        <View style = {styles.textArea}>
          <Text style = {styles.name}>{name}</Text>
          <Text style = {styles.email}>{email}</Text>
          
        </View>
        <TouchableOpacity style = {styles.editButton} onPress ={onPressEdit}>
          <Text style = {styles.edit}>Edit</Text>
        </TouchableOpacity>
    </View>
  )
}