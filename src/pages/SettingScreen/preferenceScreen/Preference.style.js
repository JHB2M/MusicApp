import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container:{
    flex:1,

  },
  lines:{
    marginTop:20,
    backgroundColor:'white',
  },
  body:{
    flex:1,
    backgroundColor:'#f0f8ff',
    
    alignItems:'center',
   
  },
  line:{
    margin:7,
  
    width:300,
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
  },
  lineText:{

    fontSize:16,
    marginLeft:10,
    fontWeight:'bold',
  },
  buttonArea:{
    borderRadius:5,
    padding:10,
    margin:10,
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'white',
    flexDirection:'row',
    width:320,
  },
  signOutText:{
    color:'tomato',
    fontSize:16,
    fontWeight:'bold',
  }

})