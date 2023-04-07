import { StyleSheet } from "react-native";
export default   StyleSheet.create({
  container:{
    flex:1,
   
  },
  image:{
    width:140,
    height:140,
  },
  priceContainer:{
    top:100,
    justifyContent:"center",
    alignItems:'center',
    width:140,
    height:40,
    position:'absolute',
    opacity:0.7,
    backgroundColor:'black',
  },
  price:{
    fontWeight:'bold',
    color:'white',
    fontSize:17
  }
})