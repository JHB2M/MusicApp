import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Logo from "../../../components/logo/Logo";
import styles from "./SigninScreen.style";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function SigninScreen({ navigation }) {
  const user = useSelector((selector) => selector.user);
  
  const dispatch = useDispatch();
  const [list,setList] =useState([])
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function navigateToSignUp() {

    navigation.navigate("SignUpScreenn");
  }
 

  async function GetData(){
    try {
      const value = await AsyncStorage.getItem('@List')
      console.log("Data getted with successfully..",value,'SignInScreen')
      setList(JSON.parse(value))
    } catch (error) {
      console.log("There is a problem while getting data..",error,"SignInScreen")  
    }
  }

  async function SaveData(value){
    try {
      await AsyncStorage.setItem('@List',JSON.stringify(value))
      console.log("Data saved with successfully.." +"SignIN")
    } catch (error) {
      console.log("There is a problem while saving data..." ,error)
    }
  }
 

  function navigateToMainScreen() {
    GetData()

    for (let i = 0; i < list.length; i++) {
      if(list[i].email==email&&list[i].password==password){
        list[i].isActive =true;
        SaveData(list)
        navigation.navigate("TabScreenss");
      }
      
    }
     
      
      //
     // dispatch({type:'SAVE_USER',payloads:{user:obj}})
      
     
    }
    
    
  

  return (
    <View style={styles.container}>
      <Logo isBlack={true} iconColor="tomato" isScreamBlack={true} />
      <View style={styles.inputArea}>
        <Input
          isSecure={false}
          placeholderText="Email"
          value={email}
          onType={setEmail}
        />
        <Input
          isSecure={true}
          placeholderText="Password"
          value={password}
          onType={setPassword}
        />
        <Button iconName="" buttonText="LOGIN" onPress={navigateToMainScreen} />
       
        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View style={styles.orArea}>
          <View style={styles.orLine}></View>
          <Text style={styles.orText}>OR</Text>
          <View style={styles.orLine}></View>
        </View>
        <View style={styles.bottomArea}>
          <Button iconName="facebook" buttonText="LOGIN WİTH FACEBOOK" />
          <View style={styles.bottomTextArea}>
            <Text style={styles.account}>Don't have an account</Text>
            <TouchableOpacity onPress={navigateToSignUp}>
              <Text style={styles.signUp}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}