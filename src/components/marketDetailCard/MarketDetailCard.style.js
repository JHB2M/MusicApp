import { StyleSheet } from "react-native";
export default StyleSheet.create({
  
  container:{
  
    width:400,
    alignItems:'center',
    padding:20,
    height:630,
   

  },

  image:{
    width:350,
    height:400,
    
  },
  absoluteItems:{
    top:50,
    width:350,
    position:'absolute',
    alignItems:'center',
   
    flexDirection:'row',
    justifyContent:'space-between'
  },
 
  icon:{
   
  right:20,

  },
  priceContainer:{

    backgroundColor:'tomato',
    borderTopRightRadius:30,
    borderBottomRightRadius:30,
    justifyContent:'center',
    alignItems:'center',
    padding:10,
  },
  price:{

    
    fontSize:17,
    color:'white',
  },
  title:{
    fontWeight:'700',
    marginVertical:10,
    fontSize:24,
    color:'white',
  },
  shopicon:{

    left:130,
  }

})