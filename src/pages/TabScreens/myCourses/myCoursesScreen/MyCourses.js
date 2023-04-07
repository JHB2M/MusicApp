import React from "react";
import {View,Text, FlatList} from 'react-native'
import Header from "../../../../components/header/Header";
import styles from './MyCourses.style'
import MyCoursesCard from "../../../../components/myCoursesCard/MyCoursesCard";
import { useSelector } from "react-redux";

export default function MyCourses({navigation}){
  const list = useSelector((selector)  => selector.courseList)

  function navigateTCourseDetail(item){ 
      navigation.navigate('MyCoursesDetailPage',{item})
  }
  
  
  
  const renderData = ({item}) => <MyCoursesCard item ={item} onMyCourseDetails ={()=>navigateTCourseDetail(item)}/>




  return(
    <View style = {styles.container}>
      <Header header='MY COURSES'/>
      <View style = {styles.body}>
       <FlatList
       data = {list}
       renderItem = {renderData}
       />
      </View>
    </View>
  )
}