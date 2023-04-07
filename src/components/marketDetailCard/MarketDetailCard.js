import React, { useState } from "react";
import { View,Text,Image,TouchableOpacity ,ImageBackground} from "react-native";
import Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import Button from "../button/Button";
import styles from  './MarketDetailCard.style'
import { useSelector } from "react-redux";
export default function MarketDetailCard({item,onPressHeart,onPressShoping,onPressButton}){
  const list = useSelector((selector) =>selector.favList)
 
  

  return(
    <View style = {styles.container}>
    
        <View style = {styles.imageContainer}>

        <Image style = {styles.image} source ={{uri:item.imageUrl}}/>
          <View style  ={styles.absoluteItems}>

          <View style = {styles.priceContainer}>
            <Text style = {styles.price}>${item.price}</Text>
          </View>
          <TouchableOpacity style = {styles.iconContainer} onPress ={onPressHeart}>
          {item.isFav ? (
             <Icon  style ={styles.icon} name ='heart' color ='tomato' size ={40}/>
          ):(
            <Icon  style ={styles.icon} name ='heart' color ='white'size ={40}/>
          )}
         
          </TouchableOpacity>
          </View>
        
        </View>
        <Text style = {styles.title}>{item.title}</Text>
        <Button buttonText='Add To Card'  onPress={onPressButton}/>        
       <TouchableOpacity onPress={onPressShoping}>
        
       <Icon  style = {styles.shopicon}name = 'shopping' color = 'white' size  ={50}/>
       </TouchableOpacity>
     
    </View>
  )
}