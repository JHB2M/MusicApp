import { StyleSheet } from "react-native";
 const styles =(cardColor) => StyleSheet.create({
  container:{
    borderRadius:8,
    justifyContent:'space-evenly',
    flex:1,
    margin:10,
    backgroundColor:cardColor,
    padding:5,
    width:350,
    height:200,
  },
  header:{
    alignItems:'flex-end',
   
    marginBottom:50,
  },
  brand:{

  
    marginRight:10,
    fontWeight:'bold',
    color:'white',
    fontSize:30,
  },
  number:{
    marginLeft:20,
    color:'white',
    fontSize:23,
  },
  footer:{
   
    justifyContent:'space-between',
    flexDirection:'row',
    marginBottom:10,
  },
  title:{
    
    marginLeft:20,
    fontSize:19,
    color:'white',
  },
  valid:{
    color:'white',
    fontSize:19,
    marginRight:10,
  }

})

export default styles