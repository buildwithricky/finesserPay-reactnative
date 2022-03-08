import React from "react";
import {
	TouchableOpacity,
	Text,
	StyleSheet,
	View,
	Dimensions,
	Platform,
	Pressable
} from "react-native";
import { colors, fonts, fontSizes } from "../utils/utils";

// custom buttons

const { height, width } = Dimensions.get("screen");

const CustomButton = ({ title, onPress, background, color }) => {
	return (
		<View style={{ border: "" }}>
			{Platform.OS == "ios" ? (
				<TouchableOpacity
					activeOpacity={0.8}
					onPress={onPress}
					style={styles({ background, color }).button}
				>
					<Text style={styles({ background, color }).text}>{title}</Text>
				</TouchableOpacity>
			) : (
				<Pressable
					onPress={onPress}
					style={styles({ background, color }).button}
          android_ripple={{ 
            color:background ==='#FFFFFF' ? '#313030':'#FFFFFF',
           
         foreground:true,
         radius:150
          }
          
          }
				>
          				<Text style={styles({ background, color }).text}>{title}</Text>
          </Pressable>
			)}
		</View>
	);
};

const styles = ({ background, color }) =>
	StyleSheet.create({
		button: {
			shadowColor: "#000",
			shadowOffset: { width: 0, height: 1 },
			shadowOpacity: 0.4,
			shadowRadius: 2,
			elevation: 5,
			width: width * 0.9,
			marginVertical: 10,
			height: 49,
			borderRadius: 15,
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: background || colors.secondaryColor
		},
		text: {
			alignItems: "center",
			padding: 10,
			color: color || colors.secondaryColor,
			fontFamily: fonts.bold,
			fontSize: fontSizes.sm,
			lineHeight: fontSizes.md
		}
	});

export default CustomButton;
