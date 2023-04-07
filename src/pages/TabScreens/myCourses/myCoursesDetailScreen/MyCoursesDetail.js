import { View,Text ,Image, TouchableOpacity,FlatList} from "react-native";
import styles from './MyCoursesDetail.style'
import Header from "../../../../components/header/Header";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import MyCoursesDetailCard from '../../../../components/myCoursesDetailCard/MyCoursesDetailCard'
export default function MyCoursesDetail({route}){
  const item = route.params.item
  console.log(typeof(item.sections[0].video_length))

  const list = item.sections

  
 const renderData = ({item})  => <MyCoursesDetailCard title = {item.title} vLength ={item.video_length}/>
  return(
    <View style = {styles.container}>
     <Header  header='MY COURSE DETAILS'/>
     <View style = {styles.body}>
      <View style = {styles.imageBody}>

      <Image  style = {styles.image} source ={{uri:item.imageUrl}}/>
      </View>
      <View style = {styles.littleImageBody}>
        <Image style = {styles.littleImage} source ={{uri:item.imageUrl}}/>
       <View style = {styles.textArea}>
       <Text style = {styles.title}>{item.title}</Text>
        <Text style = {styles.teacher}>{item.teacher}</Text>
       </View>
      </View>
     </View>
     <View style ={styles.footer}>
      <View style ={styles.footerTextArea}>

      <Text style = {styles.footerText}>Lectures</Text>
      <TouchableOpacity>
      <Icon name ='download' size ={30} color ='gray'/>
      </TouchableOpacity>
      </View>
    
      <FlatList
      data = {list}
      renderItem ={renderData}
      />
     </View>
    </View>
  )
}

/**
 *   
 */