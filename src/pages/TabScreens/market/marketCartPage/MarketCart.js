import { View, Text, FlatList, ScrollView } from "react-native";
import styles from "./MarketCart.style";
import { useDispatch, useSelector } from "react-redux";
import FavouriteCard from "../../../../components/favouriteCard/FavouriteCard";
import Header from "../../../../components/header/Header";
import Button from "../../../../components/button/Button";
import  Icon  from "react-native-vector-icons/Fontisto";
import { useState } from "react";
export default function MarketCart({navigation}) {
  const [priceArrayy, setPriceArray] = useState([0]);
  const list = useSelector((selector) => selector.buyList);
  const dispatch = useDispatch();

  function removeItemBuy(item) {
    dispatch({ type: "DELETE_BUY", payloads: { removeId: item.id } });
  }
  const tempList = list
  for (let index = 0; index < list.length; index++) {
    
   
     
      priceArrayy.push(list[index].price);
   
  }

  const sum = priceArrayy.reduce(sumElements);
  function sumElements(total, value) {
    return total + value;
  }

  const renderData = ({ item }) => (
    <FavouriteCard item={item} removeItem={() => removeItemBuy(item)} />
  );
  function navigateToFav(){
    navigation.navigate('MarketFavPage')
  }
  function navigateToSettings(){
    navigation.navigate('PreferenceScreen')
  }
  function navigateToCheckout(){
    navigation.navigate('MarketCheckoutPage')
  }
  return (
    <View style={styles.container}>
      <Header header="CART" iconName="hearto" onPressSaved={navigateToFav} onPressSettings ={navigateToSettings}/>
      {list.length > 0 ? (
        <ScrollView>
          <View style={{ justifyContent: "space-between", flex: 1 }}>
            <View style={styles.body}>
              <View style={styles.reviewContainer}>
                <Text style={styles.reviewText}>
                  Review your cart and checkout !!!
                </Text>
              </View>

              <FlatList data={list} renderItem={renderData} />
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
                  <Text style={styles.price}>{Math.floor(sum) + 25}</Text>
                </View>
              </View>
              <Button style={styles.button} buttonText="CHECKOUT" onPress={navigateToCheckout}/>
            </View>
          </View>
        </ScrollView>
      ) : (
        <View>

        <View
          style={{
            backgroundColor: "#f0f8ff",
            justifyContent: "center",
            alignItems: "center",
          }}
          >
          <Text
            style={{
              fontWeight: "300",
              fontSize: 21,
              padding: 5,
              color: "red",
            }}
          >
            You have no item in the cart
          </Text>
        </View>
         <Icon   style  ={styles.icon}name = 'shopping-basket-add' size = {280} color = 'gray'/>
            </View>
      )}
    </View>
  );
}
