import * as React from 'react';
import {View,StyleSheet}  from "react-native"
import {TextInput,useTheme} from "react-native-paper"
const FormInput  = ({formWidth,value,label,type,setValue,placeholder}) => {
  const [number, onChangeNumber] = React.useState("");
  const theme = useTheme();
  const {colors} = theme


  return (
 <View>
 <TextInput
        label={label}
        on
        style={styles(formWidth).input}
value={value}
onChange ={()=>setValue}
placeholder={placeholder}
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
    marginRight:10,
    
    borderRadius:15,

  },
});


export default FormInput ;