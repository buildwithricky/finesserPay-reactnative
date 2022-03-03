import React, {useState} from "react"
import {View,Text,StyleSheet,SafeAreaView , Dimensions }from "react-native"
import {colors,fonts,fontSizes} from "../utils/utils"
import CustomButton from '../components/CustomButton';
import {TextInput} from "react-native-paper"
import FormInput from '../components/Forms/FormInput' 

import { Checkbox } from 'react-native-paper';

const {height,width} = Dimensions.get('screen')

const SignUp = ()=>{
  const [checked, setChecked] = React.useState(false);
    const [show,setShow] = useState(true)
     const [countryCode, setCountryCode] = useState('');
    return(
          <SafeAreaView style={styles.container}>
  
     <View style={styles.textCon}><Text style={styles.text}>Lets get you started</Text></View>
      <View style={styles.textCon}><Text style={styles.subText}>Enter your basic details and let’s dive in</Text></View>
        
    <View style={styles.formContainer}>
      <View style={styles.formRow}>
      
        <FormInput placeholder="First name" formWidth={width*0.43}/><FormInput placeholder="Last name" formWidth={width*0.43}/>  
        </View>
        <View style={styles.formRow}>
        <FormInput placeholder="code" value="+234" formWidth={width*0.3} disabled={true}/><FormInput  placeholder="phone number"formWidth={width*0.58}/>  
        </View>
           <View style={styles.formRow}>
        <FormInput placeholder="Email address" formWidth={width*0.9}/>
        </View>
           <View style={styles.formRow}>
        <FormInput placeholder="Password" type="password" isHidden={show}  right={<TextInput.Icon name="eye-off" onPress={()=>{setShow(!show)}}/>} formWidth={width*0.9}/>
        </View>
         <CustomButton
          onPress={() => navigation.navigate('SIGN UP')}
          title="Sign up"
          color="#FFFFFF"
        />
    </View>
     
   
       
        
         <View style={styles.terms}>
      
         <View style={{alignItems:'center',marginBottom:30,justifyContent:'center'
  
    
    }}><Text style={styles.lowers}>Already have an Account <Text style={styles.special}>SIGN IN</Text></Text></View>
       <View style={styles.finalRow}>
       <Checkbox 
           status={checked ? 'checked' : 'unchecked'}
           color="#0F0F0F80"
      onPress={() => {
        setChecked(!checked);
      }}
       />
       <View>
       <View>
       <Text  style={styles.lower}> By tapping “Sign Up”, you Agree to our</Text>
       </View>
       <View style={{alignItems:'center'}}>
       <Text><Text style={styles.special} >Terms</Text>
        <Text style={styles.lowers}> and </Text> 
        <Text style={styles.special} >
        Privacy policy 
        </Text>
        </Text>
        </View>
        </View>
        </View>
        
      </View>
   

         </SafeAreaView>
    )

    
}
const styles = StyleSheet.create(
    {
        container:{
            backgroundColor:'#FFFFFF',
            height:height,
            flex:1,
            alignItems:'center'
        },
        textCon:
        {alignItems:'flex-start',
        width:width*0.9}
        ,
          formContainer:{
          alignItems:'center',
          marginBottom:30
        },
        text:{
            fontFamily:fonts.bold,
            fontSize:fontSizes.sm,
            textAlign:'left',
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

 formRow: {
      flexDirection:'row'  ,marginBottom:15,
      width:width*0.9,
      justifyContent:'space-between'
      },
       finalRow: {
      flexDirection:'row'  ,marginBottom:10,
      alignItems:'center',
       justifyContent:'center'
      
      },
      lower:{
              color:'#b2b2b2',
          fontFamily:fonts.regular,
          fontSize:14,
          alignItems:'center',
        justifyContent:'center',
      },
      terms:{
          justifyContent:'center'
      },
       lowers:{
              color:'#b2b2b2',
          fontFamily:fonts.regular,
         fontSize:14,
     
   
      },
      special:{
          color:'#6e7beb',
          fontFamily:fonts.bold,
          fontSize:14
      }
  
    }
)




export default SignUp