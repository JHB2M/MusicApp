import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container:{
    flex:1
  },
  recieverArea:{
    flex:1,
    backgroundColor:'#f0f8ff',
    
  },
  recieverTopArea:{
    flex:1,
    margin:10,
  },
  recieverTopFlex:{
    justifyContent:'space-between',
    flex:1,
    flexDirection:'row',
  },
  recieverText:{
    fontSize:22,
  },
  name:{
    marginTop:5,
    fontSize:16,
    fontWeight:'300',
  },
  recieverBotArea:{
    flex:1,
    margin:10,
  },
  footer:{
    
   
    backgroundColor:'#f0f8ff',
    alignItems:'center',
  },
    calculate:{
      borderRadius:10,
      width:320,
    padding:10,
    
    margin:10,
  },
  subTotalArea:{
    padding:2,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  body:{
    minHeight:460
  },
 

})