import {View,Text} from 'react-native'
import styles from './MyCoursesDetailCard.style'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
export default function MyCoursesDetailCard({title,vLength}){
  return(
    <View style = { styles.container}>
      <View>
        <Icon name  ='check-circle' size={25} color ='#00ff00'/>
      </View>
      <View style  ={styles.textArea}>
      <Text style = {styles.title}>{title}</Text>
      <Text style = {styles.videoLength}>{vLength}</Text>
      </View>
      <View>
        <Icon name  ='play' size={30} color ='tomato'/>
      </View>
    </View>
  )
}