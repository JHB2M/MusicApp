import React from "react";
import {View,Text,ImageBackground, TouchableOpacity ,Image,Alert} from 'react-native'
import Button from '../../../../components/button/Button'
import styles from './CourseDetail.style'
import Header from "../../../../components/header/Header";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CourseData from '../../../../CourseData.json'
import { useDispatch } from "react-redux";
export default function CourseDetail({route,navigation}){
  const dispatch = useDispatch()
  const id = route.params.item.id
  const item = CourseData[id-1]
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
  
  function SaveCourse(){
    
    dispatch({type:'SAVE_COURSE',payloads:{itemCourse:item}})
    Alert.alert('MusicGru','Enrolled the course with successfully...')
  }

  function navigateToSetting(){
    navigation.navigate('PreferenceScreen')
  }
  return(
    <View style = {styles.container}>
      <Header header='COURSE DETAILS' onPressSettings={navigateToSetting}/>
      <View style ={styles.body}>
        <ImageBackground style  ={styles.image} source ={{uri:item.imageUrl}} resizeMode ='cover'>
          <View style = {styles.head}>

          <Text style = {styles.title}>{item.title}</Text>
          <Text style = {styles.teacher}>{item.teacher}</Text>
         
          <View style ={styles.starArea}>
              {renderStars()}
              <Text style  ={styles.comments}>({item.comments})</Text>
          </View>
          <View style = {styles.dummy}>
             <Icon name = 'account-multiple' size = {20} color ='white'/>
            <Text style = {styles.enroll}>{item.enrolled} Enrolled</Text>
            <Icon name = 'play' size = {20} color ='white'/>
            <Text style = {styles.hours}> {item.hours}</Text>

            
          </View>
          </View>
          <View style = {styles.videoArea}>
          <View style  ={{alignItems:'center',justifyContent:'center'}}>
            <Image style = {styles.videoImage} source = {{uri:item.imageUrl}}/>
            <TouchableOpacity style = {{position:'absolute'}}>
            <Icon   name="play" size={100} color  = 'white'/>
            </TouchableOpacity>
          </View>
            <Button style = {styles.button} buttonText ='Add to Wishlist' onPress={SaveCourse}/>
            <View style ={styles.learnArea}>
                <Text style ={styles.videoTitle}> What Will I Learn ?</Text>
                <View style = {{flexDirection:'row',alignItems:'center'}}>
                    <Icon name = 'check' size ={25} />
                    <Text style  ={styles.learn}>{item.learn[0]}</Text>
                </View> 
                <View style = {{flexDirection:'row',alignItems:'center'}}>
                    <Icon name = 'check' size ={25} />
                    <Text style  ={styles.learn}>{item.learn[1]}</Text>
                </View>
                <View style = {{flexDirection:'row',alignItems:'center'}}>
                    <Icon name = 'check' size ={25} />
                    <Text style  ={styles.learn}>{item.learn[2]}</Text>
                </View>
                <View style = {{flexDirection:'row',alignItems:'center'}}>
                    <Icon name = 'check' size ={25} />
                    <Text style  ={styles.learn}>{item.learn[3]}</Text>
                </View>
                
            </View>
          </View>
        </ImageBackground>

        </View>
          
      </View>
  
  )
}
