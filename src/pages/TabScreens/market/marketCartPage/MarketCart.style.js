import { StyleSheet } from "react-native";
export default  StyleSheet.create({
  container:{
    flex:1,
  
  },
  reviewContainer:{
    backgroundColor:'#f0f8ff',
    justifyContent:'center',
    alignItems:'center',
  },
  reviewText :{
    fontWeight:'300',
    fontSize:21,
    padding:5,
   
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
  icon:{
    marginLeft:14,
    marginTop:120,
    opacity:0.19,
  }

})