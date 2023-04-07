import { View,Text,TouchableOpacity } from "react-native";
import styles from './PaymentCard.style'
export default function PaymentCard({item,onPress}){
  const cardStyle = styles(item.color)
  return(
    <TouchableOpacity style = {cardStyle.container}onPress ={onPress}>
      <View style = {cardStyle.header}>
          <Text style = {cardStyle.brand}>{item.card_brand}</Text>       
      </View>
      <Text style = {cardStyle.number}>{item.card_number}</Text>
      <View style = {cardStyle.footer}>
        <Text style = {cardStyle.title}>{item.title}</Text>
        <Text style = {cardStyle.valid}>{item.valid_thru}</Text>
      </View>
    </TouchableOpacity>
  )
}