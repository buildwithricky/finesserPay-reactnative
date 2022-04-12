import {RadioButton} from "react-native-paper"
import React from "react"
import {
  Text,
  View,
  StyleSheet,
  
} from 'react-native';
 import {fonts, fontSizes ,colors}  from "../../utils/utils"



export const RadioSet = ({categoryA,categoryB})=>{
    return(
     
     <View style={styles.selection}>
   <View style={styles.list}>
   <RadioButton.Android  uncheckedColor="#000000" value={categoryA} color={colors.primaryColor} style={{
 }}/>
 <Text style={styles.text}>{categoryA}</Text>
   </View>  
   
   { categoryB  ? <View style={styles.list}>
   <RadioButton.Android  uncheckedColor="#000000" value={categoryB} color={colors.primaryColor} style={{
 }}/>
 <Text style={styles.text}>{categoryB}</Text>
   </View> : null }
   
   
   
  
  </View>
    
    )
    
}



const styles = StyleSheet.create({
text:{
      fontFamily :fonts.regular,
      fontSize:fontSizes.sm,
    
   
  }
  ,
  selection:{
    flexDirection:'row' ,
    justifyContent:'space-between',
    marginHorizontal :20,
   
  },
  list:{
    flexDirection:'row' ,
    justifyContent:'center',
  alignItems:'center'
    
  }
  
  })
 