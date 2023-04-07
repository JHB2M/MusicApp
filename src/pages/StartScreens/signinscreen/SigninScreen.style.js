import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container:{
    flex:1,
    
    alignItems:'center',
  },
  inputArea:{
    alignItems:'center',
  },
  forgotText:{
    fontSize:17,
    letterSpacing:1,
  },
  footer:{
    alignItems:'center',
   width: 300,
   
  },
  orArea:{
    
   marginVertical:25,
    justifyContent:'center',
    alignItems:'center',
   
    flexDirection:'row',

  },
  orLine:{
    marginHorizontal:30,
    height:1,
    width:90,
    backgroundColor:'red',
    backgroundColor:'gray',
  },
  orText:{
    fontSize:30,
    marginHorizontal:0,
  },
  bottomArea:{
    alignItems:'center',
    marginTop:70
  },
  bottomTextArea:{
    flexDirection:'row',
  },
  account:{
    fontSize:17,
    letterSpacing:0.5,
  },
  signUp:{
    color:'tomato',
    fontSize:17,
    letterSpacing:0.5,
    marginLeft:5,
  }
})