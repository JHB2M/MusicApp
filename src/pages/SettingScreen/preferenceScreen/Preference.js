import { View,Text, Switch, TouchableOpacity } from "react-native";
import Header from "../../../components/header/Header";
import styles from './Preference.style'
import Icon  from "react-native-vector-icons/Entypo";
import { useEffect,useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Preference({navigation}){
  const  [list,setList]  =useState([])
  async function GetData(){
    try {
      const value =  await AsyncStorage.getItem('@List')
      setList(JSON.parse(value))
      console.log("Data getted with successfully...",value)
    } catch (error) {
      console.log('There is a problem while reteriveng data...',error)
    }
  }
  async function SaveData(value){
  try {
    await AsyncStorage.setItem('@List',JSON.stringify(value))
    console.log("Data saved with successfully...",value)
  
  } catch (error) {
    console.log("There is a problem while saving data...",error)  
  }
  }
  useEffect(() =>{
    GetData()
  },[])


  
  const navigateToSignIn = () =>{
    for (let i = 0; i < list.length; i++) {
      if(list[i].isActive ==true){
        const obj={
          name:list[i].name,
          email:list[i].email,
          password :list[i].password,
          isActive:false
        }
        list[i] =obj
        
        SaveData(list)
        navigation.navigate("SignInScreenn")
      }
     
    }
   
  }
  return(
    <View style = {styles.container}>
      <Header header='PREFERENCE'/>
      <View style = {styles.body}>
        <View style = {styles.lines}>

          <View style = {styles.line}>
            <Text style = {styles.lineText}>Autoplay Videos</Text>
            <Switch/>
          </View>
          <View style = {styles.line}>
            <Text style = {styles.lineText}>Countinue lecture in background</Text>
            <Switch/>
          </View>
          <View style = {styles.line}>
            <Text style = {styles.lineText}>Download via wi-fi</Text>
            <Switch/>
          </View>
          <View style = {styles.line}>
            <Text style = {styles.lineText}>Download to SD card</Text>
            <Switch  />
          </View>
        </View>
        <View style = {styles.buttonArea}>
            <Text style = {styles.signOutText}>SIGN OUT</Text>
            <TouchableOpacity onPress={navigateToSignIn}>
            <Icon name = 'log-out' size={30} color='tomato'/>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}