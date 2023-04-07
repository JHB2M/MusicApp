import { View,Text,Image, TouchableOpacity } from "react-native";
import styles from './MyCoursesCard.style'
export default function MyCoursesCard({item,onMyCourseDetails}){
  return(
    <TouchableOpacity style = {styles.container} onPress ={onMyCourseDetails}>
      <Image style = {styles.image} source = {{uri:item.imageUrl}}/>
      <View style = {styles.textArea}>
        <Text style = {styles.title}>{item.title}</Text>
        <Text style = {styles.teacher}>{item.teacher}</Text>
        
        <Text style = {styles.start}>Start Course</Text>
      </View>
    </TouchableOpacity>
  )
}