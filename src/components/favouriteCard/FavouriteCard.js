import React, { useState } from "react";
import {View,Image,Text, TouchableOpacity} from 'react-native'
import Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import styles from './FavouriteCard.style'
export default function FavouriteCard({item,isFav,IncreaseItem,DecreaseItem,removeItem,addItemFromFavourite}){
  const [counter,setCounter] = useState(0)
  return(
    <View style = {styles.container}> 
        <Image style = {styles.image} source = {{uri:item.imageUrl}}/>
        <View style = {styles.withoutImage}>

        <View style = {styles.topArea}>
          <Text style = {styles.title}>{item.title}</Text>

            <TouchableOpacity onPress={removeItem}>
            <Icon name ='trash-can' color = 'tomato' size = {27}/>
            </TouchableOpacity>
        </View>
        <View style = {styles.bottomArea}>
            <Text style = {styles.price}>${item.price}</Text>
           {isFav ?(
            <TouchableOpacity style = {styles.buyContainer} onPress ={addItemFromFavourite}>
                <Text style = {styles.buy}>BUY</Text>
            </TouchableOpacity>
           ):(
            <View style = {styles.indecArea}>
              <TouchableOpacity onPress={IncreaseItem}>

              <Icon name = 'minus-circle-outline'  color ='black' size = {27}/>
              </TouchableOpacity>
              <Text style = {styles.counter}>{counter}</Text>
              <TouchableOpacity onPress={DecreaseItem}>

              <Icon name = 'plus-circle-outline'  color ='black' size = {27}/>
              </TouchableOpacity>
            </View>
           )}
        </View>
        </View>
    </View>
  )
}