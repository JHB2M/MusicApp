import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container:{
    flex:1,
    margin:10,
    flexDirection:'row',
    
  },
  image:{
    width:85,
    height:85,
    borderRadius:5,
  },
  withoutImage:{
    margin:7,
    flex:1,
    justifyContent:'space-around',
  },
  topArea:{
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
  },
  bottomArea:{
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
  },
  price:{
    fontSize:17,
    color:'tomato',
  },
  quantity:{
    fontWeight:'300'
  }
 

})