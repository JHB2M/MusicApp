import React, { useState } from "react";
import {View,Text,Image,TouchableOpacity} from 'react-native'
import styles from './CourseCard.style'
import Icon  from "react-native-vector-icons/FontAwesome";
export default function CourseCard({item,onPress}){
  const fullStarCount =Math.floor(item.star)
  const halfStarCount  =Math.round (item.star-fullStarCount)
  const renderStars = ()  =>{
    const stars =[]
    for (let index = 0; index <fullStarCount; index++) {
      stars.push(<Icon name  ='star' size={25} color ='tomato' key={index}/>)
      
    }
    if(halfStarCount ===1){
      stars.push(<Icon name ='star-half-full'  size={25} color ='tomato' key ={fullStarCount} />)
    }
    return stars
  }
  
  return(
    <TouchableOpacity style = {styles.container} onPress ={onPress}>
      <Image style ={styles.image } source  ={{uri:item.imageUrl}}/>
      <View style = {styles.textArea}>
        <Text style ={styles.title}>{item.title}</Text>
        <Text style  ={styles.teacher}>{item.teacher}</Text>
        <View style ={styles.starContainer}>
            {renderStars()}
        </View>
      </View>
    </TouchableOpacity>
  )
}
/*<Icon name = 'star-half-full' size={25} color ='tomato'/> */