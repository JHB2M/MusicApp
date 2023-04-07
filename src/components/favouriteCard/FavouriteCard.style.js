import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container:{
   
    flex:1,
    padding:10,
    flexDirection:'row',
  },
  image:{
    resizeMode:'cover',
    height:100,
    width:100,
  },
  withoutImage:{
    flex:1,
   
    justifyContent:'space-around',
    padding:5,
  },
 
  topArea:{
    
   
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
  },
  bottomArea:{
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
  },
  price:{
    color:'tomato',
    fontSize:16
  },
  buyContainer:{
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    backgroundColor:'tomato',
    padding:5,
    width:60,
  },
  buy:{
  
    color:'white',
    fontSize:18
  },
  indecArea:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
  },
  counter:{
    marginHorizontal:10,
    fontSize:20,
  }

})