import React, {useState} from "react"
import {View,Text,StyleSheet,SafeAreaView }from "react-native"
import {colors,fonts,fontSizes} from "../utils/utils"
import CustomButton from '../components/CustomButton';
import FormInput from '../components/Forms/FormInput' 
import { Checkbox } from 'react-native-paper';
const SignUp = ()=>{
    return(
          <SafeAreaView style={styles.container}>
      
     <View><Text style={styles.text}>Lets get you started</Text></View>
      <View><Text style={styles.subText}>Enter your basic details and let’s dive in</Text></View>
        
    
     
     <View style={styles.formRow}>
        <FormInput label="First name" formWidth={162}/><FormInput label="Last name" formWidth={162}/>  
        </View>
        <View style={styles.formRow}>
        <FormInput placeholder="code" formWidth={96}/><FormInput  placeholder="phone number"formWidth={242}/>  
        </View>
           <View style={styles.formRow}>
        <FormInput label="Email address" formWidth={343}/>
        </View>
           <View style={styles.formRow}>
        <FormInput label="Password" formWidth={343}/>
        </View>
       
        
         <View style={styles.btnGroup}>
       <CustomButton
          onPress={() => navigation.navigate('SIGN UP')}
          title="Sign up"
          color="#FFFFFF"
        />
      </View>
    <View style={{alignItems:'center',marginBottom:43,
  
    
    }}><Text style={styles.lowers}>Already have an Account <Text style={styles.special}>SIGN IN</Text></Text></View>
       <View style={styles.finalRow}><Checkbox/><Text  style={styles.lower}>By tapping “Sign Up”,you Agree to our <Text style={styles.special} >Terms</Text> and <Text style={styles.special} >Privacy policy </Text></Text></View>

         </SafeAreaView>
    )

    
}
const styles = StyleSheet.create(
    {
        container:{
            backgroundColor:'#FFFFFF',
            flex:1,
            padding:10,   
                 
           
           
        }
        ,
        text:{
            fontFamily:fonts.bold,
            fontSize:fontSizes.sm,
            lineHeight:20,
            marginBottom:14
          
        },
        subText:{
             fontFamily:fonts.regular,
            fontSize:fontSizes.sm,
               lineHeight:20,
            marginBottom:14
        }
        ,
          btnGroup: {
    alignItems:'center'
    ,marginBottom:24
   
  },
 formRow: {
      flexDirection:'row'  ,marginBottom:15
      },
       finalRow: {
      flexDirection:'row'  ,marginBottom:10,
      alignItems:'center',
          flex:1,
     
      },
      lower:{
              color:'blue',
          fontFamily:fonts.regular,
          fontSize:fontSizes.sm,
              flex:1,
     
   
      },
       lowers:{
              color:'blue',
          fontFamily:fonts.regular,
         fontSize:fontSizes.sm
     
   
      },
      special:{
          color:'blue',
          fontFamily:fonts.bold,
          fontSize:14
      }
    }
)




export default SignUp