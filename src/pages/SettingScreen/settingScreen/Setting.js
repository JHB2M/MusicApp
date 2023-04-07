import { useState } from "react";
import { View,Text,Image, TouchableOpacity } from "react-native";
import Icon  from "react-native-vector-icons/FontAwesome5";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/button/Button";
import Header from "../../../components/header/Header";
import SettingCard from "../../../components/settingCard/SettingCard";
import styles from './Settings.style'

export default function Setting(){
  const dispatch  =useDispatch()
  const user =useSelector((selector) =>selector.user)
  const [name,setName] = useState(user.name)
  const [email,setEmail] = useState(user.email)
  const [password,setPassword] = useState(user.password)
 function updateInfo(){
  const user ={
    name:name,
    email:email,
    password:password,
  }
  dispatch({type:'SAVE_USER',payloads:{user:user}})
 }
  return(
    <View style = {styles.container}>
      <Header header='EDIT PROFILE'/>
      <View style = {styles.body}>

        <View style = {styles.imageContainer}>
         

            <Image style = {styles.image} source  = {{uri:'https://lh3.googleusercontent.com/keep-bbsk/AJ5RgYAzbS7jVY3TyIujsRsuMMheopL-TRnLBYvXlg-5kqJNL-5rH-_JDTapUZg6Flh19GY10XxmkqM1N-x66bSIAngIbHQjYS9Kv0VmMrHD3K_Z8sao=s1489'}}/>
            <TouchableOpacity style ={styles.penArea}>

            <Icon name ='pen' size={20} color ='white'/>
            </TouchableOpacity>
          
        </View>
        <SettingCard title='NAME' value={name} onType ={setName}/>
        <SettingCard title='EMAIL' value={email} onType ={setEmail}/>
        <SettingCard title='PASSWORD' value={password} onType ={setPassword}/>
        <Button buttonText='UPDATE' onPress={updateInfo}/>
      </View>
    </View>
  )
}