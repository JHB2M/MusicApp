import { View,Text } from "react-native";
import styles from './MarketSuccess.style'
import  Icon  from "react-native-vector-icons/AntDesign";
import Button from "../../../../components/button/Button";
export default function MarketSuccess({navigation}){
  function navigateToMarket(){
    navigation.navigate('MarketPage')
  }
  return(
    <View style = {styles.container}>
      <View style ={styles.topArea}>

      <Icon style = {styles.icon} name = 'checkcircle' size  ={200} color='lime'/>
      <Text style = {styles.paymentS}>PAYMENT SUCCESS</Text>
      <Text>We will send to your notification</Text>
      <Text>when the products will be delivered</Text>
      </View>
       <View style = {styles.button}>

      <Button style = {styles.button}buttonText='KEEP SHOPING' onPress={navigateToMarket}/>
       </View>
    </View>
  )
}