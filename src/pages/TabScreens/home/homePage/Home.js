import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../../../../components/header/Header";
import styles from "./Home.style";
import { useSelector } from "react-redux";
import UserAvatar from "../../../../components/userAvatar/UserAvatar";
import CourseData from "../../../../CourseData.json";
import CourseCard from "../../../../components/courseCard/CourseCard";
export default function Home({ navigation }) {
  const user = useSelector((selector) => selector.user);
 const [list,setList]  =useState([])
const [name,setName]  =useState('')
const [email,setEmail] =useState('')

  async function GetData() {
    try {
      const value = await AsyncStorage.getItem("@List");
      console.log(value);
      setList(JSON.parse(value))
    } catch (error) {
      console.log("there is  a problem while getting data...", error);
    }
  }

  useEffect(() => {
    GetData();
    for (let i = 0; i < list.length; i++) {
      if(list[i].isActive ==true){
        setName(list[i].name)
        setEmail(list[i].email)
      }    
}
  }, []);
  useEffect(() => {
   
    for (let i = 0; i < list.length; i++) {
      if(list[i].isActive ==true){
        setName(list[i].name)
        setEmail(list[i].email)
      }    
}
  }, [list]);

  function navigateToCourseDetail(item) {
    navigation.navigate("CourseDetailPage", { item });
  }

  const renderShownData = ({ item }) => (
    <CourseCard item={item} onPress={() => navigateToCourseDetail(item)} />
  );

  function navigateToEditProfile() {
    navigation.navigate("SettingScreen");
  }

  function navigateToPreference() {
    navigation.navigate("PreferenceScreen");
  }
  return (
    <View style={styles.container}>
      <Header header="HOME" onPressSettings={navigateToPreference} />

      <View style={styles.body}>
        <UserAvatar
          name={name}
          email={email}
          onPressEdit={navigateToEditProfile}
        />
      </View>
      <View style={styles.list}>
        <Text style={styles.course}>Courses</Text>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          data={CourseData}
          renderItem={renderShownData}
        />
      </View>
    </View>
  );
}
