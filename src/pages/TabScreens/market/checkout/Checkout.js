import { View, Text, FlatList, ScrollView } from "react-native";
import Header from "../../../../components/header/Header";
import styles from "./Checkout.style";
import CheckoutCard from "../../../../components/checkoutCard/CheckoutCard";
import { useSelector } from "react-redux";
import Button from "../../../../components/button/Button";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useState } from "react";
export default function Checkout({navigation}) {
 

 
  
  
  
  
  
  const list = useSelector((selcetor) => selcetor.buyList);
  const [listPrice,setListPrice]  =useState([])
  const user = useSelector((selector) =>selector.user)
  for (let index = 0; index < list.length; index++) {
    listPrice.push(list[index].price)
    
  }
  let sum  = listPrice.reduce(sumPrice)
  function sumPrice(total,value){
    return total+value
  }
  
  function navigateToPayment(){
    navigation.navigate('MarketPaymentPage')
  }
  
  const renderData = ({ item }) => <CheckoutCard item={item} />;
 
  
  

  return (
    <View style={styles.container}>
     <ScrollView>
    <Header header="CHECKOUT" onPressSettings={null} />
    <View style={styles.body}>
          <FlatList data={list} renderItem={renderData} />
        </View>
        <View style={styles.recieverArea}>
        <View style={styles.recieverTopArea}>
        <View style={styles.recieverTopFlex}>
        <Text style={styles.recieverText}>Receiver</Text>
        <Icon name="pen" size={25} color="tomato" />
        </View>
        <Text style={styles.name}>{user.name}</Text>
        </View>
        <View style={styles.recieverBotArea}>
        <View style={styles.recieverTopFlex}>
        <Text style={styles.recieverText}>Email</Text>
        <Icon name="pen" size={25} color="tomato" />
        </View>
        <Text style={styles.name}>{user.email}</Text>
          </View>
          </View>
          <View style={styles.footer}>
          <View style={styles.calculate}>
          <View style={styles.subTotalArea}>
          <Text style={styles.price}>Sub Total</Text>
          <Text style={styles.price}>{Math.floor(sum)}</Text>
          </View>
          <View style={styles.subTotalArea}>
                  <Text style={styles.price}>Shipping Coast</Text>
                  <Text style={styles.price}>$25</Text>
                  </View>
                <View style={styles.subTotalArea}>
                  <Text style={styles.price}>Total</Text>
                  <Text style={styles.price}>{Math.floor(sum)+25}</Text>
                  </View>
                  </View>
                  <Button style={styles.button} buttonText="Payment" onPress={navigateToPayment}/>
                  </View>
                  </ScrollView>
  
                  </View>
                  );
                }

             