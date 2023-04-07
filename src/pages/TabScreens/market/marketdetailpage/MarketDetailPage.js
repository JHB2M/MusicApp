import { View,Text, FlatList ,ImageBackground, Alert} from "react-native";
import Header from "../../../../components/header/Header";
import MarketDetailCard from "../../../../components/marketDetailCard/MarketDetailCard";
import styles from './MarketDetailPage.style'
import MarketData from '../../../../MarketData.json'
import { useDispatch } from "react-redux";
import { useState } from "react";
export default function MarketDetailPage({route,navigation}){
  const dispatch = useDispatch()
  const item  =route.params.item
 const [id,setId] = useState(item.id-1)
 
  
  function SaveFav(item){
    item.isFav=true
    dispatch({type:'SAVE_FAV',payloads:{itemRed : item}})
    Alert.alert('MusicGru',item.title +' saved successfully...')
  
  }
  function SaveBuy(item){
    
    dispatch({type:'SAVE_BUY',payloads:{itemBuy : item}})
    Alert.alert('MusicGru',item.title +' saved successfully...')
  
  }

  function navigateToSettings(){
    navigation.navigate('PreferenceScreen')
  }
  function NavigateToShoping(){
      navigation.navigate('MarketCartPage')
  }
  function NavigateToFav(){
    navigation.navigate('MarketFavPage')
  }

  const renderData = ({item}) => <MarketDetailCard item ={item}  onPressHeart ={() =>SaveFav(item)} onPressShoping  ={NavigateToShoping} onPressButton ={() =>SaveBuy(item)}/>
  return (
    <View>
      <Header header='DETAILS' iconName = 'hearto' onPressSaved={() =>NavigateToFav()} onPressSettings ={navigateToSettings}/>

      <ImageBackground style = {styles.imageBg} source = {{uri:item.imageUrl}}  resizeMode='cover'  >
      <FlatList
      data = {MarketData}
      renderItem = {renderData}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      initialScrollIndex={item.id-1}
    
     
      />
      </ImageBackground>
    </View>
  )
}