import { View,Text,Image } from "react-native";
import styles from './CheckoutCard.style'
import Icon  from "react-native-vector-icons/FontAwesome5";
export default function CheckoutCard({item}){
  return(
    <View style = {styles.container}>
      <Image style = {styles.image} source = {{uri:item.imageUrl}}/>
      <View style = {styles.withoutImage}>
        <View style ={styles.topArea}>
            <Text style = {styles.title}>{item.title}</Text>
           <Icon name = 'pen' size = {25} color='tomato'/>
        </View>
        <View style  ={styles.bottomArea}>
          <Text style = {styles.price}>${item.price}</Text>
          <Text style  ={styles.quantity}>Quantity 1</Text>
        </View>
      </View>
    </View>
  )
}
