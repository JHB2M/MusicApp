import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import styles from "./SignUpScreen.style";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import Logo from "../../../components/logo/Logo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";

export default function SignUpScreen({ navigation }) {
  const dispatch = useDispatch();
  const [isInclude, setIsInclude] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [list, setList] = useState([]);
  async function GetData(){
   try {
    const value   =await AsyncStorage.getItem('@List')
    setList(JSON.parse(value))
    console.log("Data Getted with successfully..."+'//')
   } catch (error) {
      console.log("There is a problem while geting data...",error)
   }
  }
  async function SetData(value) {
    try {
      await AsyncStorage.setItem("@List", JSON.stringify(value));
      console.log("Data setted with successfuly ", value);
      
    } catch (error) {
      console.log(
        "There is a problem while setting data",
        error,
        "SignUpScreen"
      );
    }
  }

  function navigateToSignIn() {
    const obj = {
      name: name,
      password: password,
      email: email,
      isActive: false,
    };

    setList([...list, obj])
    SetData(list);

    navigation.navigate("SignInScreenn");
   
  }

  function navigateToSignInWithoutUser() {
    navigation.navigate("SignInScreenn");
  }

  // const user ={
  //   name:name,
  //   email:email,
  //   password:password,
  //   isActive:false,
  // }

  // async function  StoreData  () {

  //   try {

  //     await AsyncStorage.setItem('@User',JSON.stringify(user))
  //     console.log('MusicGru','Data Saved with successfully!!')
  //   } catch (error) {
  //     console.log('MusicGru','There is a problem while saving user data!!')
  //   }
  // }

  // function navigateToSignin(){

  //    StoreData()

  //   dispatch({type:'SAVE_USER',payloads:{user:user}})
  //   navigation.navigate('SignInScreenn')
  // }
  // function navigateToSignInWithoutUser(){
  //   navigation.navigate('SignInScreenn')
  // }
  return (
    <View style={styles.container}>
      <Logo iconColor="tomato" isBlack={true} isScreamBlack={true} />
      <View style={styles.inputArea}>
        <Input
          placeholderText="Full Name"
          isSecure={false}
          value={name}
          onType={setName}
        />
        <Input
          placeholderText="Email"
          isSecure={false}
          value={email}
          onType={setEmail}
        />
        <Input
          placeholderText="Password"
          isSecure={true}
          value={password}
          onType={setPassword}
        />
        <Input placeholderText="Confirm Password" isSecure={true} />
        <View style={styles.bottomArea}>
          <Button iconName="" buttonText="SIGN UP" onPress={navigateToSignIn} />
          <View style={styles.bottomTextArea}>
            <Text style={styles.already}>Already have an account?</Text>
            <TouchableOpacity
              style={styles.loginContainer}
              onPress={navigateToSignInWithoutUser}
            >
              <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
