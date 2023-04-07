import { View,Text, TextInput } from "react-native";
import styles from './SettingCard.style'
export default function SettingCard({title,value,onType}){
  
  return(
    <View style = {styles.container}>
        <Text style = {styles.title}>{title}</Text>
        <TextInput value={value} onChangeText ={onType}/>

    </View>
  )
}