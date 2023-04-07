import { View,Text, FlatList } from "react-native";
import Header from "../../../../components/header/Header";
import styles from './Payment.style'
import  PaymentData  from '../../../../PaymentData.json'
import PaymentCard from '../../../../components/paymentCard/PaymentCard'
export default function Payment({navigation}){

   
   
   function navigateToSuccess(){
    navigation.navigate('MarketSuccessPage')
   }
      const renderData = ({item}) => <PaymentCard item = {item} onPress = {navigateToSuccess}/>
   

  return(
    <View style = {styles.container}>
     
    <Header header = 'PAYMENT'/>
      <View style = {styles.body}>
        <View style = {styles.selectCardView}>
          <Text style = {styles.selectText}>Select Your Card</Text>
        </View>
        <View>

        <FlatList 
        data = {PaymentData}
        horizontal
        renderItem={renderData}
        />
        </View>
      </View>
    </View>
  )
}