import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./StartScreen.style";
import { useState, useEffect } from "react";

import Button from "../../../components/button/Button";
import Logo from "../../../components/logo/Logo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";

function StartScreen({ navigation }) {
  const [list,setList] = useState([])
  const image = {
    uri: "https://cdn-icons-png.flaticon.com/128/616/616285.png",
  };
  const imageUrl = {
    uri: "https://images.unsplash.com/photo-1548382045-12933058693c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM0fHxndWl0YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
  };
    // taking list data from asyncStorage
  async function GetData(){
    try {
      const value  = await AsyncStorage.getItem('@List')
      setList(JSON.parse(value))
      console.log("Data getted with successfully...",value)
   
    } catch (error) {
      console.log("There is a problem while getting data..",error)
    }
  }
  console.log(list)
  useEffect(()=>{
    GetData()
   
   

  },[])
  // const dispatch = useDispatch();
  // const [user, setUser] = useState(null);
useEffect(()=>{
  for (let i = 0; i < list.length; i++) {
    if(list[i].isActive==true){
      navigation.navigate("TabScreenss")
    }  
}
},[list])




  

  
 
   function navigateToSignUp() {
    navigation.navigate("SignUpScreenn");
   }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBg}
        source={imageUrl}
        resizeMode="cover"
      >
        <Logo iconColor="white" />
        <View style={styles.footer}>
          <View style={styles.footerTextArea}>
            <Text style={styles.account}>Dont have an account</Text>
            <TouchableOpacity
              style={styles.signUpContainer}
              onPress={navigateToSignUp}
            >
              <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <Button iconName="facebook" buttonText="LOGIN WITH FACEBOOK" />
          <Button iconName="email" buttonText="LOGIN WITH EMAIL" />
        </View>
      </ImageBackground>
    </View>
  );
}

export default StartScreen;
