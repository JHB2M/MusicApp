import { View,Text,Image,TouchableOpacity } from "react-native";
import styles from './MarketCard.style'

export default function MarketCard({item,onPress}){
  return(
    <TouchableOpacity style = {styles.container} onPress ={onPress}>
      <Image style = {styles.image} source = {{uri:item.imageUrl}}/>
      <View style = {styles.priceContainer}>
        <Text style = {styles.price}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  )
}