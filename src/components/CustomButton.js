import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Dimensions,
  Platform,
  Pressable,
} from "react-native";
import { colors, fonts, fontSizes } from "../utils/utils";

// custom buttons

const { height, width } = Dimensions.get("screen");

const CustomButton = ({ title, onPress, background, color, disabled }) => {
  return (
    <View style={styles({ background, color }).shadow}>
      {Platform.OS == "ios" ? (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPress}
          style={styles({ background, color }).button}
        >
          <Text style={styles({ background, color }).text}>{title}</Text>
        </TouchableOpacity>
      ) : (
      
          <View style={styles({ background, color }).parent}> 
            
        <Pressable
          onPress={onPress}
          style={styles({ background, color }).button}
          android_ripple={{
            color: background === "#FFFFFF" ? "#313030" : "#FFFFFF",
borderless: false,
           
            // radius: 150,
          }}
          disabled={disabled}
        >
          <Text style={styles({ background, color }).text}>{title}</Text>
        </Pressable>
          </View>
        
      )}
    </View>
  );
};

const styles = ({ background, color }) =>
  StyleSheet.create({
    shadow: { 
         width: width * 0.9,
      marginVertical: 10,
      
    },
    parent:{
      overflow: "hidden",
        borderRadius: 15,
     width:"100%",
     shadowOpacity: 0.4,
      shadowRadius: 2,
      elevation: 5,
        shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
     
        
    },
    
    button:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
       height: 49,
       backgroundColor: background || colors.secondaryColor,
    },
    text: {
      alignItems: "center",
      padding: 10,
       textAlign:"center",
      color: color || colors.secondaryColor,
      fontFamily: fonts.bold,
      fontSize: fontSizes.sm,
      lineHeight: fontSizes.md,
    },
  });

export default CustomButton;
