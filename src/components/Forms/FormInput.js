import * as React from 'react';
import {View,StyleSheet}  from "react-native"
import {TextInput,useTheme} from "react-native-paper"
const FormInput  = ({formWidth,value,label,type,setValue,placeholder,right, isHidden,disabled, name, onChangeText,keyboardType
,onBlur}) => {
  const [number, onChangeNumber] = React.useState("");
  const theme = useTheme();
  const {colors} = theme


  return (
 <View>
 <TextInput
 autoComplete="off"
        label={label}
        disabled={disabled}
        style={styles(formWidth).input}
value={value}
name={name}
onChangeText = {onChangeText}
onBlur={onBlur}
placeholder={placeholder}
right={right || ""}
 secureTextEntry = {type === 'password' ? isHidden :false}
 keyboardType={keyboardType}
        textContentType={type}
        autoCapitalize="none"
        underlineColor="transparent"
        selectionColor="#000000"
        theme ={{...theme,roundness:15,colors:{...colors,text:'black',primary:'transparent'}}}
      />
    </View>
  
  );
};
const styles = (props) =>StyleSheet.create({

  input: {
   width:props,
    backgroundColor:'#F2F2F2',
    height:60,
 
    
    borderRadius:15,

  },
});


export default FormInput ;