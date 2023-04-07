import { View, Text, FlatList } from "react-native";
import FavouriteCard from "../../../../components/favouriteCard/FavouriteCard";
import styles from "./MarketFav.style";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../../components/header/Header";
import  Icon  from "react-native-vector-icons/Fontisto";
export default function MarketFav({navigation}) {
  const list = useSelector((selector) => selector.favList);
  const dispatch =useDispatch()
  console.log(list)
  function removeItemFav(item){
    item.isFav=false
    dispatch({type:'DELETE_FAV',payloads:{removeIdFav:item.id}})
  }

  function SaveItemFromFavourite(item){
    dispatch({type:'SAVE_BUY',payloads:{itemBuy:item}})
  }
  
  const renderData = ({ item }) => <FavouriteCard item={item} isFav={true} removeItem ={()=>removeItemFav(item)} addItemFromFavourite ={() => SaveItemFromFavourite(item)}/>;

  function navigateToSettings(){
    navigation.navigate('PreferenceScreen')
  }
  function navigateToCart(){
    navigation.navigate('MarketCartPage')
  }
  return (
    <View style={styles.container}>
      <Header header="Favourite" iconName="shoppingcart" onPressSaved={navigateToCart} onPressSettings ={navigateToSettings}/>
      {list.length > 0 ? (
        <FlatList data={list} renderItem={renderData} />
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
            You don't have any saved items
          </Text>
        </View>
            <Icon  style = {styles.icon}name="heart" size ={300} color='gray'/>
            </View>
       
      )}
    </View>
  );
}
