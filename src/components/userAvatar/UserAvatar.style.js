import React from "react";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container:{
    backgroundColor:'#e0e0e0',
    padding:10,
    flexDirection:'row',
    alignItems:'center',
    
  },
  imageBody:{
    marginHorizontal:5,
  },
  image:{
    borderRadius:50,
    height:80,
    width:80,
  },
  textArea:{
    width:192,
    marginLeft:5,
  },
  name:{
    fontSize:20,
    fontWeight:'600',
  },
  editButton:{
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center',
    width:90,
    padding:12,
    backgroundColor:'tomato',
    marginLeft:0,
  },
  edit:{
    color:'white',
    fontSize:16,
    fontWeight:'bold',
    letterSpacing:0.8
  }
})